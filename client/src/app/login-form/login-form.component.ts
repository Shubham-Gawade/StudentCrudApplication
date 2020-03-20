import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')]]
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

      this.http.post('http://localhost:3000/user/login', data).subscribe((response: any) => {
      alert(response.msg);
      this.router.navigate(['/homepage']);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
