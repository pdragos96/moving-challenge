import { Component, OnInit, Input } from "@angular/core";
import { ContestantCombined } from "../../models/contestantCombined";
import { CardComponentService } from "./card-component-service/card-component.service";

@Component({
  selector: "app-card-component",
  templateUrl: "./card-component.component.html",
  styleUrls: ["./card-component.component.scss"]
})
export class CardComponentComponent implements OnInit {
  selectedPage: number;

  @Input()
  public contestant: ContestantCombined;

  constructor(private navService: CardComponentService) {}

  ngOnInit() {}

  getRidingRank(): string {
    return "Ranked " + this.navService.getRidingRank(this.contestant);
  }

  getRunningRank(): string {
    return "Ranked " + this.navService.getRunningRank(this.contestant);
  }

  getSwimmingRank(): string {
    return "Ranked " + this.navService.getSwimmingRank(this.contestant);
  }

  getWalkingRank(): string {
    return "Ranked " + this.navService.getWalkingRank(this.contestant);
  }
}
