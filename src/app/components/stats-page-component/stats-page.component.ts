import { Component, OnInit } from "@angular/core";
import { StatsPageService } from "./stats-page-service/stats-page.service";
import { LevelClass } from "src/app/models/levelClass";

@Component({
  selector: "app-stats-page",
  templateUrl: "./stats-page.component.html",
  styleUrls: ["./stats-page.component.scss"]
})
export class StatsPageComponent implements OnInit {
  constructor(private statsService: StatsPageService) {
    this.statsService.get_data();
    this.statsService.get_info();
  }

  ngOnInit() {}

  public getLevels(): LevelClass[] {
    return this.statsService.getLevelsArray();
  }

  public getElement(pos: number): LevelClass {
    return this.getElement(pos);
  }

  public getDaysGone(): string {
    return this.statsService.getDaysGone();
  }

  public getDaysLeft(): string {
    return this.statsService.getDaysLeft();
  }

  public getDaysGonePercentage(): string {
    return this.statsService.getDaysGonePercentage();
  }
}
