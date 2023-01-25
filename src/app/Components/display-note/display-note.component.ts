import { style } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() childMessage: any;
  @Output() refreshDisplay = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private dataservice: DataService,) { }
  search = '';
  isList: boolean = false;
  listmails:any;
  ngOnInit(): void {
    this.dataservice.isList.subscribe((data) => {
      this.isList = data;
      console.log('this is list', this.isList);
    });
    this.dataservice.currentMessage.subscribe((res: any) => {
      console.log(res)
      this.search = res;
    })
  }
  openDialog(notes: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      height: 'auto',
      panelClass: 'my-custom-dialog-class',
      data: notes
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed',result);
      
      this.refreshDisplay.emit(result);
    });
  }
  
  iconautorefresh(event: any) {
    console.log(event);
    this.refreshDisplay.emit(event)
  }
  collabmail(event: any) {
    console.log(event); 
  this.listmails=event
  console.log(this.listmails);
  
  }
  onclickletter(notes: any){
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width:'35%',
      height:'auto',
      data: notes.collaborators
    }); 
  }

}
