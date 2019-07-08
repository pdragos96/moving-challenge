import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login-service/login.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  inputCorrect: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    localStorage.setItem("isBackVisible","visible");
  }

  public tryLogin(user: string, pass: string) {
    let el = this.loginService.tryToLogin(user, pass);
    el.subscribe(
      response => {
        localStorage.setItem("authKey", response.headers.get("x-fortech-auth"));
        localStorage.setItem("currentUser", response.body.username);
        this.inputCorrect = "";
        console.log("USER CURENT " + localStorage.getItem("currentUser"));
        console.log("AUTH KEY" + localStorage.getItem("authKey"));
        this.navigateToHome();
      },
      err => {
        localStorage.setItem("authKey", "");
        localStorage.setItem("currentUser", "");
        console.log("User authentication failed!");
        this.inputCorrect = "Incorrect username or password.";
      }
    );
  }

  navigateToHome() {
    if (localStorage.getItem("authKey") != "") {
      this.router.navigateByUrl("/");
    }
  }
}
