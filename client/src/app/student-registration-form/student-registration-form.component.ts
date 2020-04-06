import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit {

  studentregistrationform: FormGroup;
  passcheck = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentServive: StudentService
  ) { }

  ngOnInit() {
    this.studentregistrationform = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      mobileno: ['', [Validators.required, Validators.pattern('[7-9][0-9]{9}')]],
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      username: ['', [ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')]],
      confirmpassword: ['', Validators.required]
    });
  }

  get firstnamevalidate() {
    return this.studentregistrationform.get('firstname');
  }

  get lastnamevalidate() {
    return this.studentregistrationform.get('lastname');
  }

  get mobilenovalidate() {
    return this.studentregistrationform.get('mobileno');
  }

  get emailvalidate() {
    return this.studentregistrationform.get('email');
  }

  get usernamevalidate() {
    return this.studentregistrationform.get('username');
  }

  get passwordvalidate() {
    return this.studentregistrationform.get('password');
  }

  get conPasswordvalidate() {
    return this.studentregistrationform.get('confirmpassword');
  }

  isPassCheck() {
      if (this.studentregistrationform.get('password').value === this.studentregistrationform.get('confirmpassword').value) {
        return true;
      } else {
        this.passcheck = true;
        return false;
      }
  }

  clearError() {
    this.passcheck = false;
  }

  register() {
    if (this.isPassCheck()) {
    const data = {
      firstname: this.studentregistrationform.get('firstname').value,
      lastname: this.studentregistrationform.get('lastname').value,
      mobileno: this.studentregistrationform.get('mobileno').value,
      email: this.studentregistrationform.get('email').value,
      username: this.studentregistrationform.get('username').value,
      password: this.studentregistrationform.get('password').value
    };
    console.log('data', data);

    this.studentServive.studentRegister(data).subscribe((response: any) => {
        console.log(response);
        alert(response.msg);
        this.router.navigate(['/homepage']);
      }, (error) => {
        console.log(error);
        alert(error.error.msg);
    });
  }
}
}
