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

  competersArray: ContestantCombined[] = new Array();
  displayedList: ContestantCombined[] = new Array();
  filteredArray: ContestantCombined[] = new Array();

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
      this.constructNum(this.numberOfElements);
    });
  }

  constructNum(howMany: number): void {
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

  public reconstructNum(): void {
    let howMany: number = this.displayedList.length;
    let total: number;
    if (howMany % 6 > 0) {
      total = howMany / 6 + 1;
      total = Math.trunc(total);
    } else {
      total = howMany / 6;
      total = Math.trunc(total);
    }
    console.log("O SA AVEM ACUM " + total + " PAGINI");
    for (let i = 0; i < 5; i++) {
      this.num[i] = i + 1;
    }
    if (total >= 5) {
      this.num[5] = total;
    } else {
      this.num[5] = 5;
    }
  }

  getDisplayedListSize(): number {
    return this.displayedList.length;
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
      this.displayedList = this.competersArray;
    });
  }

  public getContestantsAsArray(): ContestantCombined[] {
    return this.competersArray;
  }

  public getTheSixContestants(): ContestantCombined[] {
    return this.displayedList.slice(
      6 * (this.getSelectedPage() - 1),
      6 * (this.getSelectedPage() - 1) + 6
    );
  }

  public showElementsThatContainString(nume: string): void {
    this.filteredArray = new Array();

    for (let i = 0; i < this.competersArray.length; i++) {
      if (
        (
          this.competersArray[i].firstName.toUpperCase() +
          " " +
          this.competersArray[i].lastName.toUpperCase()
        ).includes(nume.toUpperCase()) ||
        (
          this.competersArray[i].lastName.toUpperCase() +
          " " +
          this.competersArray[i].firstName.toUpperCase()
        ).includes(nume.toUpperCase())
      ) {
        this.filteredArray.push(this.competersArray[i]);
      }
    }
    this.decreaseArrayToFirst();
    this.allFalse();
    this.changeFirst();
    this.displayedList = this.filteredArray;
    this.reconstructNum();
  }

  public resetLists(): void {
    this.displayedList = this.competersArray;
    this.reconstructNum();
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

  public getSelectedPage(): number {
    if (this.isFirstSelected.getValue() === true) {
      return this.num[0];
    }
    if (this.isSecondSelected.getValue() === true) {
      return this.num[1];
    }
    if (this.isThirdSelected.getValue() === true) {
      return this.num[2];
    }
    if (this.isFourthSelected.getValue() === true) {
      return this.num[3];
    }
    if (this.isFifthSelected.getValue() === true) {
      return this.num[4];
    }
    return 0;
  }
}
