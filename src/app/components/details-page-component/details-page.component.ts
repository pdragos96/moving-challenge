import { Component, OnInit, Input } from "@angular/core";
import { ContestantCombined } from "../../models/contestantCombined";
import { DetailsPageService } from "./details-page-service/details-page.service";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
  styleUrls: ["./details-page.component.scss"]
})
export class DetailsPageComponent implements OnInit {
  contestants = this.getListOfContestants();

  constructor(private navService: DetailsPageService) {}
  ngOnInit() {
    localStorage.setItem("isBackVisible", "hidden");
  }

  getListOfContestants(): ContestantCombined[] {
    return this.navService.getTheSixContestants();
  }

  getSelectedPage(): number {
    return this.navService.getSelectedPage();
  }

  getBottomNavVisibility() {
    if (this.navService.getContestantsListLength() > 0) {
      return "visible";
  }
    return "hidden";
  }
}
