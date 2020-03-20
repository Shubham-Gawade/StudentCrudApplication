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
  passcheck = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.registrationform = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
      email: ['',[ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')]],
      confirmpassword: ['', Validators.required]
    });
  }

  get firstnamevalidate() {
    return this.registrationform.get('firstname');
  }

  get lastnamevalidate() {
    return this.registrationform.get('lastname');
  }

  get emailvalidate() {
    return this.registrationform.get('email');
  }

  get passwordvalidate() {
    return this.registrationform.get('password');
  }

  get conpasswordvalidate() {
    return this.registrationform.get('confirmpassword');
  }

  isPassCheck() {
      if(this.registrationform.get('password').value.trim() === this.registrationform.get('confirmpassword').value.trim()) {
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

  register() {
    if(this.isPassCheck()) {
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
}
