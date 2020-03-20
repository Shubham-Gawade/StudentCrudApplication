import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetpasswordform: FormGroup;
  passcheck = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.forgetpasswordform = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')]],
      confirmpassword: ['', Validators.required]
    });
  }

  get emailvalidate() {
    return this.forgetpasswordform.get('email');
  }

  get passwordvalidate() {
    return this.forgetpasswordform.get('password');
  }

  get conPasswordvalidate() {
    return this.forgetpasswordform.get('confirmpassword');
  }

  isPassCheck() {
      if(this.forgetpasswordform.get('password').value === this.forgetpasswordform.get('confirmpassword').value) {
        return true;
      }
      else {
        this.passcheck = true;
        return false;
      }
  }

  clearError() {
    this.passcheck = false;
  }

  forgetpassword() {
    if(this.isPassCheck()) {
    const data = {
      email: this.forgetpasswordform.get('email').value,
      password: this.forgetpasswordform.get('password').value
    };

    this.http.post('http://localhost:3000/user/forgetpassword', data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
}
