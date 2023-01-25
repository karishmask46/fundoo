import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private forgotuser:UserService) { }

  

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      emailorphone: ['', [Validators.required, Validators.email]],
      
    })
  }
  onforgot() {
    this.submitted = true;
    if (this.forgotForm.valid) {
      console.log('valid data', this.forgotForm.value);
      console.log('do api call');
    let efgh= {
      email: this.forgotForm.value.emailorphone,
      service: "advance"
    }
    this.forgotuser.forgot(efgh).subscribe((result:any)=>
      {
        console.log(result);
        
      })
  }
  else {
    console.log('invalid data', this.forgotForm.value);
    console.log('no api call');

  }
  }

}
