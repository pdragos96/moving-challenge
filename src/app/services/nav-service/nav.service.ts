import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../../models/userResponse';

import { ContestantCombined } from '../../models/contestantCombined';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  // tslint:disable-next-line: max-line-length
  baseUrl =
    // tslint:disable-next-line: max-line-length
    'https://sports.fortech.ro/ws/leaderboard?gender=gender&challengeId=35&pageSize=12&pageNr=101&startDate=5/15/2019&endDate=11/15/2019&all=all';

  contestantsUrlBegining =
    'https://sports.fortech.ro/ws/leaderboard?gender=gender&challengeId=35&pageSize=';
  contestantsUrlEnd =
    '&pageNr=1&startDate=5/15/2019&endDate=11/15/2019&all=all';

  num: number[] = new Array(6);
  numberOfElements: number;

  competersArray: ContestantCombined[] = new Array();
  displayedList: ContestantCombined[] = new Array();
  filteredArray: ContestantCombined[] = new Array();
  constructor(private httpClient: HttpClient) { }

  public getDisplayedListSize(): number {
    return this.displayedList.length;
  }

  public getFilteredArraySize(): number {
    return this.displayedList.length;
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
    console.log('O SA AVEM ' + total + ' PAGINI');
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
    console.log('O SA AVEM ACUM ' + total + ' PAGINI');
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
      this.displayedList = this.competersArray;
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

  public constructListThatContainString(nume: string): void {
    this.filteredArray = new Array();
    for (let i = 0; i < this.competersArray.length; i++) {
      if (
        (
          this.competersArray[i].firstName.toUpperCase() +
          ' ' +
          this.competersArray[i].lastName.toUpperCase()
        ).includes(nume.toUpperCase()) ||
        (
          this.competersArray[i].lastName.toUpperCase() +
          ' ' +
          this.competersArray[i].firstName.toUpperCase()
        ).includes(nume.toUpperCase())
      ) {
        this.filteredArray.push(this.competersArray[i]);
      }
    }
    this.displayedList = this.filteredArray;
    this.reconstructNum();
  }

  public resetLists(): void {
    this.displayedList = this.competersArray;
    this.reconstructNum();
  }
}
