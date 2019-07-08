import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavService } from "src/app/services/nav-service/nav.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router, private navService: NavService) {}

  ngOnInit() {
    if (localStorage.getItem("currentUser").length <= 0) {
      this.navigateToHome();
    }
  }

  getLoggedStatus(): string {
    if (localStorage.getItem("currentUser").length > 0) {
      return "Logout";
    }
    return "Login";
  }

  pushedLogButton(): void {
    if (localStorage.getItem("currentUser").length > 0) {
      localStorage.setItem("authKey", "");
      localStorage.setItem("currentUser", "");
      this.navigateToHome();
      return;
    } else {
      this.navigateToLogin();
    }
  }

  navigateToLogin(): void {
    this.router.navigateByUrl("/login");
  }

  navigateToHome(): void {
    this.router.navigateByUrl("/");
  }

  public getAvatarByUsername() {
    if (localStorage.getItem("currentUser") != "") {
      return this.navService.getAvatarByUsername(
        localStorage.getItem("currentUser")
      );
    }
    return "assets/user_icon.png";
  }

  getIsLogged(): string {
    if (localStorage.getItem("currentUser") != "") {
      return "true";
    }
    return "false";
  }

  public getBackVisibility(): string {
    return localStorage.getItem("isBackVisible");
  }
}
