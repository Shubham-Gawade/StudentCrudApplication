import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  studentlist = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get('http://localhost:3000/student/studentDisplay').subscribe((response: any) => {
      this.studentlist = response.student;
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

  delete(id1) {
    this.http.post('http://localhost:3000/student/studentDelete', id1).subscribe((response: any) => {
      alert(response.msg);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
