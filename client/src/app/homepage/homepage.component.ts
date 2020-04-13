import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  studentlist = [];

  constructor(
    private router: Router,
    private studentServive: StudentService,
    private authServive: AuthenticationService
  ) {}

  ngOnInit() {

    this.studentServive.getStudent().subscribe((response: any) => {
        this.studentlist = response.student;
      }, (error) => {
        console.log(error);
        alert(error.error.msg);
    });
  }

  delete(id) {
    this.studentServive.studentDelete(id).subscribe((response: any) => {
        alert(response.msg);
        this.router.navigate(['/homepage']);
      }, (error) => {
        console.log(error);
        alert(error.error.msg);
    });
  }

  update(id) {
    this.router.navigate(['/studentUpdate', id]);
  }

  logout() {
    this.authServive.logoutUser();
  }
}
