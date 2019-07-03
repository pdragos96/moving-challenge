import { Component, OnInit, Input } from "@angular/core";
import { TrackInfo } from "src/app/models/trackInfo";

@Component({
  selector: "app-track-details",
  templateUrl: "./track-details.component.html",
  styleUrls: ["./track-details.component.scss"]
})
export class TrackDetailsComponent implements OnInit {
  @Input()
  public track: TrackInfo;

  constructor() {}

  ngOnInit() {}

  public getElapsedTime(): string {
    return (this.track.elapsedTime / 60).toFixed(1) + " min";
  }

  public getActivityName() {
    return this.track.activityName;
  }

  public getTrackDetails() {
    return "http://www.sports-tracker.com/workout/null/" + this.track.id;
  }
}
