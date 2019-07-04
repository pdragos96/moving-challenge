import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {}

  public async tryLogin(): Promise<void> {
    await this.loginService.tryToLogin();
    console.log(this.loginService.getLogged() + " LOGAREA");
  }

}
