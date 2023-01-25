import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted = false;
  datalist:any;
  constructor(private formBuilder: FormBuilder,private loginuser:UserService,private router:Router,private _snackBar: MatSnackBar) { }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailorphone: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onNext() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log('valid data', this.loginForm.value);
      console.log('do api call');
    let abcd= {
      email: this.loginForm.value.emailorphone,
      password: this.loginForm.value.password,
      service: "advanced"
    }
    this.loginuser.login(abcd).subscribe((result:any)=>
      {
        console.log(result);
       this.datalist=result;
        console.log(this.datalist);
        
        localStorage.setItem('token',result.id)
        localStorage.setItem('collaborator',this.datalist.firstName)
        localStorage.setItem('collaboratoremail',this.datalist.email)
        this.router.navigateByUrl('/dashboard/Notes')
      })
  }
  else {
    console.log('invalid data', this.loginForm.value);
    console.log('no api call');

  }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration: 1000});
  }
  _show: boolean = false
  _pwdType = 'pwd'
  toggleShow() {
    this._show = !this._show
    this._pwdType = this._show ? 'text' : 'password'
  }
}
