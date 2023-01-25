import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './Components/login/login.component';
import {SignupComponent } from './Components/signup/signup.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetallNotesComponent } from './Components/getall-notes/getall-notes.component';
import { CreateNewComponent } from './Components/create-new/create-new.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { IconComponent } from './Components/icon/icon.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { UpdateComponent } from './Components/update/update.component';
import { CollaboratorComponent } from './Components/collaborator/collaborator.component';
import { FilterPipe } from './filter.pipe';
import { ShortnamePipe } from './shortname.pipe';
import { AuthenticationGuard } from './Components/authentication.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    GetallNotesComponent,
    CreateNewComponent,
    DisplayNoteComponent,
    IconComponent,
    ArchiveComponent,
    TrashComponent,
    UpdateComponent,
    CollaboratorComponent,
    FilterPipe,
    ShortnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    FormsModule ,
    MatMenuModule,
    MatSnackBarModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
