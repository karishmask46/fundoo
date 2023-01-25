import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.archieveNote()
  }
  archieveNote(){
    this.note.getNotes().subscribe((result:any)=>{
      this.noteList=result.data.data;
      this.noteList=this.noteList.filter((k:any)=>{
        return k.isArchived==true;
      })
      console.log(this.noteList);
    })
  }
  recivemsg(event:any){
    console.log(event);
    this.archieveNote();
  }
}
