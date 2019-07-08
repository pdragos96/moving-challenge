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
    localStorage.setItem("authKey", "");
    localStorage.setItem("currentUser", "");
    localStorage.setItem("isBackVisible", "hidden");
  }

  constructor(private navService: NavService) {
    this.navService.get_data();
  }
}
