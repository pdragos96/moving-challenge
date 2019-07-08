import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TracksPageService } from "./tracks-page-service/tracks.service";
import { TrackInfo } from "src/app/models/trackInfo";

@Component({
  selector: "app-tracks-page",
  templateUrl: "./tracks-page.component.html",
  styleUrls: ["./tracks-page.component.scss"]
})
export class TracksPageComponent implements OnInit {
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tracksService: TracksPageService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params["userId"];
    });

    console.log("AVEM ID UL " + this.id);
    this.tracksService.getTracksInfo(this.id);
  }

  ngOnInit() {
    localStorage.setItem("isBackVisible", "visible");
  }

  public getTracksList(): TrackInfo[] {
    return this.tracksService.getTracksList();
  }

  public getAvatarById(): string {
    return this.tracksService.getAvatarById(this.id);
  }

  public getNameById(): string {
    return this.tracksService.getNameById(this.id);
  }
}
