import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserData } from "src/app/models/userData";
import { TrackInfo } from "src/app/models/trackInfo";
import { TracksResponse } from "src/app/models/tracksResponse";

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

  constructor(private httpClient: HttpClient) {}

  public async loginTry(id: number) {
    await this.httpClient
      .post<UserData>("https://sports.fortech.ro/ws/user/login", this.user, {
        observe: "response"
      })
      .subscribe(
        response => {
          console.log(response.headers.get("x-fortech-auth"));
          this.getTracksInfo(id, response.headers.get("x-fortech-auth"));
        },
        err => {
          console.log("User authentication failed!");
        }
      );
    console.log("INCERCAM");
  }

  public async getTracksInfo(id: number, authentication: string) {
    await this.httpClient
      .get<TracksResponse>(
        this.tracksStringBeggining +
          "6000" +
          this.tracksStringIntermediate +
          id +
          this.tracksStringEnd,
        {
          headers: { "x-fortech-auth": authentication }
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
}
