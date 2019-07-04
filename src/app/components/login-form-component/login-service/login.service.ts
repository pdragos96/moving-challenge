import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/models/userData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL: string = "https://sports.fortech.ro/ws/user/login";
  user: UserData = { password: "", username: "" };
  logged: string = "no";

  constructor(private httpClient: HttpClient) { }

  public async tryToLogin() {
    await this.httpClient
      .post<UserData>("https://sports.fortech.ro/ws/user/login", this.user, {
        observe: "response"
      })
      .subscribe(
        response => {
          this.logged = "yes;"
          console.log("PRIMIT RASPUNS");
          console.log(response.headers.get("x-fortech-auth"));
        },
        err => {
          this.logged = "no";
          console.log("User authentication failed!");
        }
      );
    console.log("INCERCAM");
  }

  public getLogged(): string {
    return this.logged;
  }
}
