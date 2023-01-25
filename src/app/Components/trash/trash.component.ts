
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
 trashlist:any;
  constructor(private note:NoteService) { }
  ngOnInit(): void {
    this.trash()
  }
  trash(){
    this.note.getNotes().subscribe((result:any)=>{
      this.trashlist=result.data.data;
      this.trashlist=this.trashlist.filter((k:any)=>{
        return k.isDeleted== true;
      })
      console.log(this.trashlist);
      
    })
  }
   receivemessage($event:any){
    console.log($event);
    this.trash();
   }
   
}
