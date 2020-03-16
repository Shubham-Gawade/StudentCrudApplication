import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.registrationform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  register() {
    const data = {
      firstname: this.registrationform.get('firstname').value,
      lastname: this.registrationform.get('lastname').value,
      email: this.registrationform.get('email').value,
      password: this.registrationform.get('password').value
    };
    console.log('data', data);

    this.http.post('http://localhost:3000/user/signup', data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
