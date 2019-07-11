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

  colorOne: string = "rgb(243, 128, 200)";
  colorTwo: string = "rgb(49, 176, 227)";
  colorThree: string = "rgb(49, 176, 227)";
  colorFour: string = "rgb(49, 176, 227)";
  colorFive: string = "rgb(49, 176, 227)";
  colorSix: string = "rgb(49, 176, 227)";

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

  public sortByStartedAscending(): void {
    this.makeAllBlue();
    this.colorOne = "rgb(243, 128, 200)";
    this.tracksService.sortByStartedAscending();
  }

  public sortByStartedDescending(): void {
    this.makeAllBlue();
    this.colorTwo = "rgb(243, 128, 200)";
    this.tracksService.sortByStartedDescending();
  }

  public sortByUnitsAscending(): void {
    this.makeAllBlue();
    this.colorThree = "rgb(243, 128, 200)";
    this.tracksService.sortByUnitsAscending();
  }

  public sortByUnitsDescending(): void {
    this.makeAllBlue();
    this.colorFour = "rgb(243, 128, 200)";
    this.tracksService.sortByUnitsDescending();
  }

  public sortByElapsedAscending(): void {
    this.makeAllBlue();
    this.colorFive = "rgb(243, 128, 200)";
    this.tracksService.sortByElapsedAscending();
  }

  public sortByElapsedDescending(): void {
    this.makeAllBlue();
    this.colorSix = "rgb(243, 128, 200)";
    this.tracksService.sortByElapsedDescending();
  }

  public getColorOne(): string {
    return this.colorOne;
  }
  
  public getColorTwo(): string {
    return this.colorTwo;
  }
  
  public getColorThree(): string {
    return this.colorThree;
  }
  
  public getColorFour(): string {
    return this.colorFour;
  }
  
  public getColorFive(): string {
    return this.colorFive;
  }
  
  public getColorSix(): string {
    return this.colorSix;
  }

  public makeAllBlue(): void {
  this.colorOne = "rgb(49, 176, 227)";
  this.colorTwo = "rgb(49, 176, 227)";
  this.colorThree = "rgb(49, 176, 227)";
  this.colorFour = "rgb(49, 176, 227)";
  this.colorFive = "rgb(49, 176, 227)";
  this.colorSix = "rgb(49, 176, 227)";
  }
}
