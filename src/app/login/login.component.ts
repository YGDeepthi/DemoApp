import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  password: string;
  userName: string;
  displayLoginPage: boolean = true;
  displayRegisterPage: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  clickedLoginSubmitButton() {
    this.displayLoginPage = true;
    this.displayRegisterPage = false;
  }
  clickedRegisterSubmitButton() {
    this.displayLoginPage = false;
    this.displayRegisterPage = true;
  }
}
