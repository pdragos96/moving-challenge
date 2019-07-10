import { Component, OnInit, Input } from "@angular/core";
import { LevelClass } from "src/app/models/levelClass";

@Component({
  selector: "app-stats-page-levels",
  templateUrl: "./stats-page-levels.component.html",
  styleUrls: ["./stats-page-levels.component.scss"]
})
export class StatsPageLevelsComponent implements OnInit {
  @Input()
  public level: LevelClass;

  constructor() {}

  ngOnInit() {}

  public getPercentage(): string {
    return this.level.completedPercentage + "%";
  }
}
