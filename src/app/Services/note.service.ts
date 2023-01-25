import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private http:HttpServiceService) {
    this.token = localStorage.getItem('token')
  }
  addNotes(data: any) {
    console.log(data, this.token);
    console.log('do api call');

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', data, true, header)
  }
  getNotes() {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', true, header)
  }
  updatenote(data: any) {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', data, true, header)
  }
  trashnote(data: any) {
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', data, true, httpOptions)

  }
  changecolor(data:any) {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',data, true, header)
  }
  restore(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', data, true, header)

  }
  deleteforever(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes', data, true, header)
  }
  archivenote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',data,true,header)
  }
  addCollab(id:any,data:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice(`http://fundoonotes.incubation.bridgelabz.com/api/notes/${id}/AddcollaboratorsNotes`, data, true, header)
  }
  searchuserlist(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice("http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList", data, true, header)
  }
  removecollab(id:any,userId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.deleteservice(`http://fundoonotes.incubation.bridgelabz.com/api/notes/${id}/removeCollaboratorsNotes/${userId}`,true, header)
  }
}
