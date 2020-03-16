import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit {

  studentregistrationform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.studentregistrationform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  register() {
    const data = {
      firstname: this.studentregistrationform.get('firstname').value,
      lastname: this.studentregistrationform.get('lastname').value,
      mobileno: this.studentregistrationform.get('mobileno').value,
      email: this.studentregistrationform.get('email').value,
      username: this.studentregistrationform.get('username').value,
      password: this.studentregistrationform.get('password').value
    };
    console.log('data', data);

    this.http.post('http://localhost:3000/student/studentSignup', data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
