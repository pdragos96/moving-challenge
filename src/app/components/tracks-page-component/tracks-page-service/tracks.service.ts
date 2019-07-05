import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserData } from "src/app/models/userData";
import { TrackInfo } from "src/app/models/trackInfo";
import { TracksResponse } from "src/app/models/tracksResponse";
import { NavService } from "src/app/services/nav-service/nav.service";

@Injectable({
  providedIn: "root"
})
export class TracksPageService {
  user: UserData = { password: "Asdfqwzxc1", username: "dragos.podariu" };

  tracksStringBeggining = "https://sports.fortech.ro/ws/track_data?pageSize=";
  tracksStringIntermediate =
    "&pageNumber=1&challengeId=35&sortBy=startedAt&order=desc&userId=";
  tracksStringEnd = "&startDate=5/15/2019&endDate=11/15/2019&all=all";

  tracksArray: TrackInfo[] = new Array();
  numberOfElements: number;

  constructor(private httpClient: HttpClient, private navService: NavService) {}

  public async getTracksInfo(id: number) {
    await this.httpClient
      .get<TracksResponse>(
        this.tracksStringBeggining +
          "6000" +
          this.tracksStringIntermediate +
          id +
          this.tracksStringEnd,
        {
          headers: { "x-fortech-auth": localStorage.getItem("authKey") }
        }
      )
      .subscribe(response => {
        this.tracksArray = response.content;
        console.log(this.tracksArray.length + " LUNGIMEA TRACKS ARRAYULUI");
        console.log(this.tracksArray);
      });
  }

  public getTracksList(): TrackInfo[] {
    return this.tracksArray;
  }

  public getAvatarById(id: number): string {
    return this.navService.getAvatarById(id);
  }

  public getNameById(id: number): string {
    return this.navService.getNameById(id);
  }
}
