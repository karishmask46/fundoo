import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpservice.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpServiceService) { }
  register(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data, false, header)
  }
  login(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data,false, header)

  }
  forgot(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/reset',data,false, header)

  }
  reset(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password',data,false, header)
  }
}
