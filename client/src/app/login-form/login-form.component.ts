import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authServive: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')]]
    });
  }

   get emailvalidate() {
      return this.loginForm.get('email');
   }

   get passwordvalidate() {
    return this.loginForm.get('password');
 }

  login() {
      const data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
      };

      this.authServive.adminLogin(data).subscribe((response: any) => {
        alert(response.msg);
        console.log(response.token);
        localStorage.setItem('token' , response.token);
        this.router.navigate(['/homepage']);
        }, (error) => {
        console.log(error);
        alert(error.error.msg);
      });
  }
}
