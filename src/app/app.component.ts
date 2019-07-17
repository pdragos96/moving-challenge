// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
// tslint:disable-next-line: quotemark
import { NavService } from "./services/nav-service/nav.service";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-root",
  // tslint:disable-next-line: quotemark
  templateUrl: "./app.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line: quotemark
  title = "moving-challenge";

  ngOnInit() {
    // localStorage.setItem("authKey", "");
    // localStorage.setItem("currentUser", "");

    // uncomment this 2 to logout user when refreshing page!

    // tslint:disable-next-line: quotemark
    localStorage.setItem("isBackVisible", "hidden");
  }

  constructor(private navService: NavService) {
    this.navService.get_data();
  }
}
