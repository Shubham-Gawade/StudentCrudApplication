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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentupdateform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required]
    });
    let id = this.route.snapshot.paramMap.get('id');
    this.studId = id;
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
    console.log('data', data);

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
