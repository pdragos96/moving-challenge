import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserData } from "src/app/models/userData";
import { tap } from "rxjs/operators";
import { NavService } from "src/app/services/nav-service/nav.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  loginURL: string = "https://sports.fortech.ro/ws/user/login";

  constructor(private httpClient: HttpClient) {}

  public tryToLogin(user: string, pass: string) {
    const userLogin: UserData = { password: pass, username: user };
    return this.httpClient.post<UserData>(
      "https://sports.fortech.ro/ws/user/login",
      userLogin,
      {
        observe: "response"
      }
    );
  }
}
