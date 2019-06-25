import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserResponse } from "./userResponse";

import { ContestantCombined } from "./contestantCombined";

@Injectable({
  providedIn: "root"
})
export class NavService {
  // tslint:disable-next-line: max-line-length
  baseUrl =
    // tslint:disable-next-line: max-line-length
    "https://sports.fortech.ro/ws/leaderboard?gender=gender&challengeId=35&pageSize=12&pageNr=101&startDate=5/15/2019&endDate=11/15/2019&all=all";

  contestantsUrlBegining =
    "https://sports.fortech.ro/ws/leaderboard?gender=gender&challengeId=35&pageSize=";
  contestantsUrlEnd =
    "&pageNr=1&startDate=5/15/2019&endDate=11/15/2019&all=all";

  isFirstSelected: BehaviorSubject<boolean>;
  isSecondSelected: BehaviorSubject<boolean>;
  isThirdSelected: BehaviorSubject<boolean>;
  isFourthSelected: BehaviorSubject<boolean>;
  isFifthSelected: BehaviorSubject<boolean>;
  num: number[] = new Array(6);
  numberOfElements: number;

  competersArray: ContestantCombined[];

  constructor(private httpClient: HttpClient) {
    this.isFirstSelected = new BehaviorSubject<boolean>(true);
    this.isSecondSelected = new BehaviorSubject<boolean>(false);
    this.isThirdSelected = new BehaviorSubject<boolean>(false);
    this.isFourthSelected = new BehaviorSubject<boolean>(false);
    this.isFifthSelected = new BehaviorSubject<boolean>(false);
  }

  async get_data() {
    const res = await this.httpClient.get<UserResponse>(this.baseUrl);
    res.subscribe(data => {
      console.log(data.totalElements);
      this.numberOfElements = data.totalElements;
      // this.numberOfElements = data.totalElements;
      this.constructNum(data.totalElements);
    });
  }

  constructNum(howMany: number) {
    let total: number;

    if (howMany % 6 > 0) {
      total = howMany / 6 + 1;
      total = Math.trunc(total);
    } else {
      total = howMany / 6;
      total = Math.trunc(total);
    }
    console.log("O SA AVEM " + total + " PAGINI");
    for (let i = 0; i < 5; i++) {
      this.num[i] = i + 1;
    }
    if (total >= 5) {
      this.num[5] = total;
    } else {
      this.num[5] = 5;
    }
    this.getContestants();
  }

  async getContestants() {
    // tslint:disable-next-line: max-line-length
    const contestants = await this.httpClient.get<UserResponse>(
      this.contestantsUrlBegining +
        this.numberOfElements +
        this.contestantsUrlEnd
    );
    contestants.subscribe(data => {
      this.competersArray = data.content;
      console.log(data.content[1]);

      for (let i = 0; i < this.numberOfElements; i++) {
        console.log(this.competersArray[i].leaderboardPieChartData[1]);
      }
    });
  }

  public getContestantsAsArray(): ContestantCombined[] {
    return this.competersArray;
  }

  public allFalse(): void {
    this.isFirstSelected = new BehaviorSubject<boolean>(false);
    this.isSecondSelected = new BehaviorSubject<boolean>(false);
    this.isThirdSelected = new BehaviorSubject<boolean>(false);
    this.isFourthSelected = new BehaviorSubject<boolean>(false);
    this.isFifthSelected = new BehaviorSubject<boolean>(false);
  }

  public changeFirst(): void {
    this.isFirstSelected.next(!this.isFirstSelected.getValue());
  }

  public changeSecond(): void {
    this.isSecondSelected.next(!this.isFirstSelected.getValue());
  }

  public changeThird(): void {
    this.isThirdSelected.next(!this.isFirstSelected.getValue());
  }

  public changeFourth(): void {
    this.isFourthSelected.next(!this.isFirstSelected.getValue());
  }

  public changeFifth(): void {
    this.isFifthSelected.next(!this.isFirstSelected.getValue());
  }

  public decreaseArray(): void {
    if (this.num[0] > 1) {
      for (let i = 0; i < 5; i++) {
        this.num[i] = this.num[i] - 1;
      }
    }
  }

  public increaseArray(): void {
    for (let i = 0; i < 5; i++) {
      this.num[i] = this.num[i] + 1;
    }
  }

  public decreaseArrayToFirst(): void {
    for (let i = 0; i < 5; i++) {
      this.num[i] = i + 1;
    }
  }

  public increaseArrayToLast(): void {
    let cont = 0;
    for (let i = 4; i >= 0; i--) {
      this.num[i] = this.num[5] - cont;
      cont = cont + 1;
    }
  }

  public getIsFirstSelected() {
    return this.isFirstSelected.asObservable();
  }

  public getIsSecondSelected() {
    return this.isSecondSelected.asObservable();
  }

  public getIsThirdSelected() {
    return this.isThirdSelected.asObservable();
  }

  public getIsFourthSelected() {
    return this.isFourthSelected.asObservable();
  }

  public getIsFifthSelected() {
    return this.isFifthSelected.asObservable();
  }
}
