import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserResponse } from "../../models/userResponse";

import { ContestantCombined } from "../../models/contestantCombined";

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

  num: number[] = new Array(6);
  numberOfElements: number;

  competersArray: ContestantCombined[] = new Array();
  displayedList: ContestantCombined[] = new Array();
  filteredArray: ContestantCombined[] = new Array();

  displayedListOne: ContestantCombined[] = new Array();
  displayedListTwo: ContestantCombined[] = new Array();
  displayedListThree: ContestantCombined[] = new Array();
  displayedListFour: ContestantCombined[] = new Array();
  displayedListFive: ContestantCombined[] = new Array();

  constructor(private httpClient: HttpClient) {}

  public getDisplayedListSize(): number {
    return this.displayedList.length;
  }

  public getFilteredArraySize(): number {
    return this.filteredArray.length;
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
    const howMany: number = this.displayedList.length;
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

  async getContestants() {
    const contestants = await this.httpClient.get<UserResponse>(
      this.contestantsUrlBegining +
        this.numberOfElements +
        this.contestantsUrlEnd
    );
    contestants.subscribe(data => {
      this.competersArray = data.content;
      for (let el of this.competersArray) {
        el.color = "transparent";
      }
      this.displayedList = this.competersArray.slice();
    });
  }

  public getContestantsAsArray(): ContestantCombined[] {
    return this.competersArray;
  }

  public getTheSixContestants(selectedPage: number): ContestantCombined[] {
    return this.displayedList.slice(
      6 * (selectedPage - 1),
      6 * (selectedPage - 1) + 6
    );
  }

  public constructFilteredList(nume: string): void {
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
  }

  public containsElement(element: ContestantCombined): boolean {
    // console.log(this.displayedList.includes(element));
    return this.displayedList.includes(element);
  }

  public addIfNotContains(): void {
    this.displayedList = new Array();
    this.displayedList = this.displayedList
      .concat(this.displayedListOne)
      .concat(this.displayedListTwo)
      .concat(this.displayedListThree)
      .concat(this.displayedListFour)
      .concat(this.displayedListFive);

    this.reconstructNum();
  }

  public addFromFirstSearch(nume: string): void {
    this.constructFilteredList(nume);
    this.displayedListOne = new Array();
    for (let cont = 0; cont < this.filteredArray.length; cont++) {
      let obj = Object.assign({}, this.filteredArray[cont]);
      obj.color = "red";
      this.displayedListOne.push(obj);
    }
    this.addIfNotContains();
  }

  public addFromSecondSearch(nume: string) {
    this.constructFilteredList(nume);
    this.displayedListTwo = new Array();
    for (let cont = 0; cont < this.filteredArray.length; cont++) {
      let obj = Object.assign({}, this.filteredArray[cont]);
      obj.color = "yellow";
      this.displayedListTwo.push(obj);
    }
    this.addIfNotContains();
  }

  public addFromThirdSearch(nume: string) {
    this.constructFilteredList(nume);
    this.displayedListThree = new Array();
    for (let cont = 0; cont < this.filteredArray.length; cont++) {
      let obj = Object.assign({}, this.filteredArray[cont]);
      obj.color = "blue";
      this.displayedListThree.push(obj);
    }
    this.addIfNotContains();
  }

  public addFromFourthSearch(nume: string) {
    this.constructFilteredList(nume);
    this.displayedListFour = new Array();
    for (let cont = 0; cont < this.filteredArray.length; cont++) {
      let obj = Object.assign({}, this.filteredArray[cont]);
      obj.color = "green";
      this.displayedListFour.push(obj);
    }
    this.addIfNotContains();
  }

  public addFromFifthSearch(nume: string) {
    this.constructFilteredList(nume);
    this.displayedListFive = new Array();
    for (let cont = 0; cont < this.filteredArray.length; cont++) {
      let obj = Object.assign({}, this.filteredArray[cont]);
      obj.color = "orange";
      this.displayedListFive.push(obj);
    }
    this.addIfNotContains();
  }

  public areAllVoid(): boolean {
    if (this.displayedListOne.length > 0) return false;
    if (this.displayedListTwo.length > 0) return false;
    if (this.displayedListThree.length > 0) return false;
    if (this.displayedListFour.length > 0) return false;
    if (this.displayedListFive.length > 0) return false;

    return true;
  }

  public makeFirstVoid(): void {
    this.displayedListOne = new Array();
    if (this.areAllVoid()) {
      this.resetLists();
    } else {
      this.addIfNotContains();
    }
  }

  public makeSecondVoid(): void {
    this.displayedListTwo = new Array();
    if (this.areAllVoid()) {
      this.resetLists();
    } else {
      this.addIfNotContains();
    }
  }

  public makeThirdVoid(): void {
    this.displayedListThree = new Array();
    if (this.areAllVoid()) {
      this.resetLists();
    } else {
      this.addIfNotContains();
    }
  }

  public makeFourthVoid(): void {
    this.displayedListFour = new Array();
    if (this.areAllVoid()) {
      this.resetLists();
    } else {
      this.addIfNotContains();
    }
  }

  public makeFifthVoid(): void {
    this.displayedListFive = new Array();
    if (this.areAllVoid()) {
      this.resetLists();
    } else {
      this.addIfNotContains();
    }
  }

  public resetLists(): void {
    this.displayedList = this.competersArray;
    for (let el of this.displayedList) {
      el.color = "transparent";
    }
    this.reconstructNum();
  }

  public getAvatarById(id: number): string {
    
    for (let el of this.competersArray) {
      if (el.userId == id) {
        return el.avatar;
      }
    }
    return "";
  }

  public getNameById(id: number): string {
    for (let el of this.competersArray) {
      if (el.userId == id ) {
          return el.firstName + " " + el.lastName;
      }
    }
    return "";
  }
}
