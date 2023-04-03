import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { DisplayNoteComponent } from './display-note.component';

describe('DisplayNoteComponent', () => {
  let component: DisplayNoteComponent;
  let fixture: ComponentFixture<DisplayNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNoteComponent],imports:[MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
