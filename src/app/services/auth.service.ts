import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';  // Import UserService

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInSubject = new BehaviorSubject<boolean>(localStorage.getItem('token') ? true : false);

  constructor(private _HttpClient: HttpClient, private _Router: Router, private _UserService: UserService) { }

  register(regForm: object): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", regForm);
  }

  login(loginForm: object): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", loginForm);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');  // Clear userName from localStorage
    this._UserService.setUserName("");  // Clear the userName in UserService
    this._Router.navigate(['/login']);
    this.isLoggedInSubject.next(false);
  }

  forgetPassword(forgetPasswordForm: any): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", forgetPasswordForm);
  }

  VerifyReset(form: any): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", form);
  }

  resetPassword(form: any): Observable<any> {
    return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", form);
  }
}
