import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss'],
})
export class ResgisterComponent implements OnInit {
  regsterform: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(10)]),
  });
  submitform() {
    this._AuthService.regestter(this.regsterform.value).subscribe((data) => {
      if (data.message == 'success') {
        this._Router.navigateByUrl('/login');
      } else {
        alert(data.message);
      }
    });
  }
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}
}
