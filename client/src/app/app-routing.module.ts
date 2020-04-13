import { AuthGuard } from './auth.guard';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
import { StudentUpdateFormComponent } from './student-update-form/student-update-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'forgetpassword', component: ForgetPasswordComponent},
  { path: 'homepage', component: HomepageComponent , canActivate: [AuthGuard] },
  { path: 'studentRegistration', component: StudentRegistrationFormComponent , canActivate: [AuthGuard]},
  { path: 'studentUpdate/:id', component: StudentUpdateFormComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
