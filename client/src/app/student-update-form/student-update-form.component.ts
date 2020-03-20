import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-update-form',
  templateUrl: './student-update-form.component.html',
  styleUrls: ['./student-update-form.component.css']
})
export class StudentUpdateFormComponent implements OnInit {

  studentupdateform: FormGroup;
  public studId = ' ';
  public student = {
    firstname: '',
    lastname: '',
    mobileno: '',
    email: '',
    username: '',
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.studId = id;

    const data ={id : this.studId};
    this.http.post('http://localhost:3000/student/studentData', data).subscribe((response: any) => {
      this.student = response.student;
      console.log(this.student);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });

    this.studentupdateform = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      mobileno: ['', [Validators.required, Validators.pattern('[7-9][0-9]{9}')]],
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      username: ['',[ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    });
  }

  get firstnamevalidate() {
    return this.studentupdateform.get('firstname');
  }

  get lastnamevalidate() {
    return this.studentupdateform.get('lastname');
  }

  get mobilenovalidate() {
    return this.studentupdateform.get('mobileno');
  }

  get emailvalidate() {
    return this.studentupdateform.get('email');
  }

  get usernamevalidate() {
    return this.studentupdateform.get('username');
  }

  update() {
    const data = {
      id : this.studId,
      firstname: this.studentupdateform.get('firstname').value,
      lastname: this.studentupdateform.get('lastname').value,
      mobileno: this.studentupdateform.get('mobileno').value,
      email: this.studentupdateform.get('email').value,
      username: this.studentupdateform.get('username').value
    };

    this.http.post('http://localhost:3000/student/studentUpdate', data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);
      this.router.navigate(['/homepage']);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

}
