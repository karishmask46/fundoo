import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private resetUser:UserService) { }
  

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      Newpassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      
    })
  }
  onset() {
    this.submitted = true;
    if (this.resetForm.valid) {
      console.log('valid data', this.resetForm.value);
      console.log('do api call');
    let lmn= {
      newPassword: this.resetForm.value.Newpassword,
      confirmPassword:this.resetForm.value.ConfirmPassword,
      service: "advance"
    }
    this.resetUser.reset(lmn).subscribe((result:any)=>
      {
        console.log(result);
        
      })
  }
  else {
    console.log('invalid data', this.resetForm.value);
    console.log('no api call');

  }
  }

}
