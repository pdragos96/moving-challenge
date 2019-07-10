import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LevelClass } from "src/app/models/levelClass";
@Injectable({
  providedIn: "root"
})
export class StatsPageService {
  baseURL = "https://sports.fortech.ro/ws/levels/report";
  movingInfoURL = "https://sports.fortech.ro/ws/challenge/active";

  daysGone: string = "";
  daysLeft: string = "";
  daysGonePercentage = "";

  levelsArray: LevelClass[] = new Array();

  constructor(private httpClient: HttpClient) {}

  async get_data() {
    await this.httpClient.post(this.baseURL, null).subscribe(
      response => {
        this.levelsArray = response as LevelClass[];
        console.log(this.levelsArray);
      },
      err => {
        console.log(err);
      }
    );
  }

  async get_info() {
    await this.httpClient.get(this.movingInfoURL).subscribe(response => {
      console.log(response[0]);
      this.daysGone = response[0].daysGone;
      this.daysLeft = response[0].daysLeft;
      this.daysGonePercentage = response[0].daysGonePercentage;
      console.log(
        this.daysGone + " " + this.daysLeft + " " + this.daysGonePercentage
      );
    });
  }

  public getDaysGone(): string {
    return this.daysGone;
  }

  public getDaysLeft(): string {
    return this.daysLeft;
  }

  public getDaysGonePercentage(): string {
    return this.daysGonePercentage + "%";
  }

  public getLevelsArray(): LevelClass[] {
    return this.levelsArray;
  }

  public getElement(pos: number): LevelClass {
    if (pos >= 0) {
      if (pos < 5) {
        return this.levelsArray[pos];
      }
    }
    return null;
  }
}
