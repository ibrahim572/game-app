import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }
  userData: any = new BehaviorSubject(null);
  saveUserData() {
    let encodedtoken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: object = jwtDecode(encodedtoken);
    this.userData.next(decodedToken);
    console.log(this.userData);
  }
  signOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
  regestter(regesterData: any): Observable<any> {
    return this.http.post(
      'https://route-egypt-api.herokuapp.com/signup',
      regesterData
    );
  }
  login(logData: any): Observable<any> {
    return this.http.post(
      'https://route-egypt-api.herokuapp.com/signin',
      logData
    );
  }
}
