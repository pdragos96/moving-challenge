import { Component, OnInit } from "@angular/core";
import { NavService } from "./services/nav-service/nav.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "moving-challenge";

  ngOnInit() {
    if (localStorage.getItem("authKey") == null) {
      localStorage.setItem("authKey", "");
    }
    if (localStorage.getItem("currentUser") == null) {
      localStorage.setItem("currentUser", "");
    }

    // localStorage.setItem("authKey", ""); uncomment this 2 to logout user when refreshing page!
    // localStorage.setItem("currentUser", ""); uncomment this 2 to logout user when refreshing page!
    localStorage.setItem("isBackVisible", "hidden");
  }

  constructor(private navService: NavService) {
    this.navService.get_data();
  }
}
