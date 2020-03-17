import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  studentlist = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {

    this.http.get('http://localhost:3000/student/studentDisplay').subscribe((response: any) => {
      this.studentlist = response.student;
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

  delete(id) {
    this.http.delete(`http://localhost:3000/student/studentDelete/${id}`).subscribe((response: any) => {
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
}
