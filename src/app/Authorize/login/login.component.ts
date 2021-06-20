import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/Model/login';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: login = new login();
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  Login()
  {
    this.auth.Login(this.login);
    console.log(this.login);
  }

}
