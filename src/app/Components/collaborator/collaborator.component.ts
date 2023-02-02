import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  id: any;
  firstname: any;
  emailorphone: any;
  addcollab = '';
  userid:any;
  inputmail:any;
  collabdata:any;
addemail:boolean=true;
collaboratordata:any;
userId:any ;
collabarray:any;
displayarray:any
  constructor(public dialog: MatDialog,private note: NoteService, public dialogRef: MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private dataService:DataService) {

    this.firstname = localStorage.getItem('collaborator');
    this.emailorphone = localStorage.getItem('collaboratoremail');
    this.id = data.id;
    this.displayarray=data.collaborators
    console.log(this.displayarray);
    
  }

  ngOnInit(): void {
  console.log(this.data);
  this.dataService.currentMessage.subscribe(this.displayarray)
    
  }
 onsaveclick(){
 this.collaborator();
  const dialogRef = this.dialog.open(UpdateComponent, {
    width: '600px',
    height: 'auto',
    panelClass: 'my-custom-dialog-class',
    data:this.data
  });
  this.dialogRef.close(CollaboratorComponent)
 }
 cancelclick(){
  const dialogRef = this.dialog.open(UpdateComponent, {
    width: '600px',
    height: 'auto',
    panelClass: 'my-custom-dialog-class',
    data:this.data
  });
  this.dialogRef.close(CollaboratorComponent)
 }
  searchcollab(k: any) {
    let data = {
      'searchWord': k.target.value
    }
    console.log(data);
    this.note.searchuserlist(data).subscribe((result: any) => {
      console.log(result);
      this.collabarray = result.data.details;
    })
  }
  collaborator(){
    this.inputmail='' 
    let data={
      firstName:this.collabdata.firstName,
      lastName:this.collabdata.lastName,
      email:this.collabdata.email,
      userId:this.collabdata.userId
    }
    console.log(this.data.id); 
    this.note.addCollab(this.data.id,data).subscribe((result:any)=>{
      console.log(result);
      this.displayarray.push(data)
      
    })
  }
  emailchoose(collab:any){
    this.addemail=true
  this.collabdata=collab
  this.inputmail=collab.email
   console.log(this.collabdata);
    console.log(this.inputmail);
  }
  removecollab(remove:any){
   this.note.removecollab(this.data.id,remove).subscribe((result:any)=>{
    console.log(result);
    this.displayarray.pop(result)
   })
  }
}
