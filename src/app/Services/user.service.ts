import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { HttpServiceService } from './httpservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpServiceService,private Http:HttpClient) { }
  private apiUrl = 'https://localhost:8080/api/users';
  onNext(): Observable<User[]> {
    return this.Http.get<User[]>(this.apiUrl)
  }
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
