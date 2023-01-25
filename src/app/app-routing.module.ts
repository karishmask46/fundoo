import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { AuthenticationGuard } from './Components/authentication.guard';
import { CollaboratorComponent } from './Components/collaborator/collaborator.component';
import { CreateNewComponent } from './Components/create-new/create-new.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetallNotesComponent } from './Components/getall-notes/getall-notes.component';
import { IconComponent } from './Components/icon/icon.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'',redirectTo:"/signin",pathMatch:'full'},
  { path: 'registration', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'resetpassword', component: ResetpasswordComponent },
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticationGuard],
    children: [
      { path: 'Notes', component: GetallNotesComponent },
      { path: 'Archive', component: ArchiveComponent },
      { path: 'Trash', component: TrashComponent },
      { path: 'cratenew', component: CreateNewComponent },
      { path: 'displaynote', component: DisplayNoteComponent },
      { path: 'Icon', component: IconComponent },
      {path:'collab',component:CollaboratorComponent},
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
