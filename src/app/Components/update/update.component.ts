import { Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/note.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
title:any;
description:any;
noteId:any;
color:any;
collabdata:any
@Output() updaterefresh=new EventEmitter<any>();
@Output() emitcolour=new EventEmitter<any>();
  constructor(public dialog: MatDialog,private notes:NoteService,public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar,private router:Router
  ) {}
  ngOnInit():void{
    console.log(this.data);
    this.title=this.data.title;
    this.description=this.data.description; 
    this.color=this.data.color;
    this.collabdata=this.data.collaborators
    console.log(this.color);
    
  }

  onNoClick(): void {
    console.log(this.title,this.description);
    let data={
      noteId:this.data.id,
      title:this.title,
      description:this.description,
      color:this.color
    }
    this.notes.updatenote(data).subscribe((response:any)=>{
      console.log(response);
      this.updaterefresh.emit(response);
    })
    this.dialogRef.close();  
  }
  emitcolor(event:any){
  this.onNoClick();
  }
  colorpallate(event:any) {
    this.onNoClick()
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration: 1000});
  }
  // recivemessage(event:any){
  //   console.log(event);
  // this.collabdata=this.data
  //   console.log(this.collabdata);
  //   this.onNoClick()
  // }
  onclickletter(){
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width:'35%',
      height:'auto',
      data:this.data
    });
    this.dialogRef.close();  
  }
}
