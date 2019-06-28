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
    let rank = this.navService.getRidingRank(this.contestant);
    if (rank % 10 === 1 && (rank < 2 || rank > 20)) {
      if (rank < 2 || rank > 20) return "Ranked " + rank + "st";
    }
    if (rank % 10 === 2 && (rank < 3 || rank > 20)) {
      return "Ranked " + rank + "nd";
    }
    if (rank % 10 === 3 && (rank < 4 || rank > 20)) {
      return "Ranked " + rank + "rd";
    }
    return "Ranked " + rank + "th";
  }

  getRunningRank(): string {
    let rank = this.navService.getRunningRank(this.contestant);
    if (rank % 10 === 1 && (rank < 2 || rank > 20)) {
      if (rank < 2 || rank > 20) return "Ranked " + rank + "st";
    }
    if (rank % 10 === 2 && (rank < 3 || rank > 20)) {
      return "Ranked " + rank + "nd";
    }
    if (rank % 10 === 3 && (rank < 4 || rank > 20)) {
      return "Ranked " + rank + "rd";
    }
    return "Ranked " + rank + "th";
  }

  getSwimmingRank(): string {
    let rank = this.navService.getSwimmingRank(this.contestant);
    if (rank % 10 === 1 && (rank < 2 || rank > 20)) {
      if (rank < 2 || rank > 20) return "Ranked " + rank + "st";
    }
    if (rank % 10 === 2 && (rank < 3 || rank > 20)) {
      return "Ranked " + rank + "nd";
    }
    if (rank % 10 === 3 && (rank < 4 || rank > 20)) {
      return "Ranked " + rank + "rd";
    }
    return "Ranked " + rank + "th";
  }

  getWalkingRank(): string {
    let rank = this.navService.getWalkingRank(this.contestant);
    if (rank % 10 === 1 && (rank < 2 || rank > 20)) {
      if (rank < 2 || rank > 20) return "Ranked " + rank + "st";
    }
    if (rank % 10 === 2 && (rank < 3 || rank > 20)) {
      return "Ranked " + rank + "nd";
    }
    if (rank % 10 === 3 && (rank < 4 || rank > 20)) {
      return "Ranked " + rank + "rd";
    }
    return "Ranked " + rank + "th";
  }
}
