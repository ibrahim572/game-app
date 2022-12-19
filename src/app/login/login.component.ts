import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  submitform() {
    this._AuthService.login(this.logform.value).subscribe((data) => {
      if (data.message == 'success') {
        localStorage.setItem('userToken', data.token);
        this._AuthService.saveUserData();
        this._Router.navigateByUrl('/home');
      } else {
        alert(data.message);
      }
    });
  }
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}
}
