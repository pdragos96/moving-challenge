import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TracksPageService } from "./tracks-page-service/tracks.service";
import { TracksDataService } from "src/app/services/tracks-data-service/tracks-data.service";
import { TrackInfo } from "src/app/models/trackInfo";

@Component({
  selector: "app-tracks-page",
  templateUrl: "./tracks-page.component.html",
  styleUrls: ["./tracks-page.component.scss"]
})
export class TracksPageComponent implements OnInit {
  id: number;
  // tracksList: TrackInfo[] = this.getTracksList();

  constructor(
    // private tracksDataService: TracksDataService,
    private activatedRoute: ActivatedRoute,
    private tracksService: TracksPageService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params["userId"];
    });
    // this.id = tracksDataService.getId();
    console.log("AVEM ID UL " + this.id);
    this.tracksService.loginTry(this.id);
  }

  ngOnInit() {}

  public getTracksList(): TrackInfo[] {
    return this.tracksService.getTracksList();
  }

  public getName(): string {
    // this.activatedRoute.params.subscribe(params => {
    //   this.id = params["userId"];
    // });
    return "TEST " + this.id;
  }
}
