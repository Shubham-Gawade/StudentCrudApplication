import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authApi = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  adminLogin(data) {
    return this.http.post(this.authApi + '/login', data);
  }

  adminRegister(data) {
    return this.http.post(this.authApi + '/signup', data);
  }

  forgetPassword(data) {
    return this.http.post(this.authApi + '/forgetpassword', data);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
