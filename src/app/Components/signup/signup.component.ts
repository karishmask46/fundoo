import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('valid data', this.registerForm.value);
      console.log('do api call');
      let data = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.Password,
        service: "advanced"
      }
      this.user.register(data).subscribe((result: any) => {
        console.log(result);
      })

    }
    else {
      console.log('invalid data', this.registerForm.value);
      console.log('no api call');

    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 1000 });
  }
  _show: boolean = false
  _pwdType = 'pwd'
  toggleShow() {
    this._show = !this._show
    this._pwdType = this._show ? 'text' : 'password'
  }
}







