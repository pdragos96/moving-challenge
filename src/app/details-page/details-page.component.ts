import { Component, OnInit } from "@angular/core";

import { NavService } from "../nav-service.service";

import { ContestantCombined } from "../contestantCombined";
import { CONTESTANTS } from "../mockContestants";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
  styleUrls: ["./details-page.component.scss"]
})
export class DetailsPageComponent implements OnInit {
  contestants = this.getListOfContestants();

  constructor(private navService: NavService) {}

  ngOnInit() {}

  getListOfContestants(): ContestantCombined[] {
    return this.navService.getTheSixContestants();
  }

  getSelectedPage(): number {
    return this.navService.getSelectedPage();
  }
}
