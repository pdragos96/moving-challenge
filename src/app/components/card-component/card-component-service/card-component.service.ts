import { Injectable } from "@angular/core";
import { NavService } from "src/app/services/nav-service/nav.service";
import { ContestantCombined } from "src/app/models/contestantCombined";
import { ContestantRanks } from "src/app/models/contestantRanks";

@Injectable({
  providedIn: "root"
})
export class CardComponentService {
  competersArray: ContestantCombined[] = new Array();
  ranksArray: ContestantRanks[] = new Array();

  constructor(private navService: NavService) {
    this.competersArray = this.navService.getContestantsAsArray();
    this.buildRanksArray();
    this.getRidingRanks();
    this.getRunningRanks();
    this.getSwimmingRanks();
    this.getWalkingRanks();
  }

  public buildRanksArray(): void {
    for (var i = 0; i < this.competersArray.length; i++) {
      this.ranksArray[i] = {
        id: this.competersArray[i].id,
        pointsCombined: this.competersArray[i].points,
        rankCombined: this.competersArray[i].rank,
        pointsRiding: this.competersArray[i].leaderboardPieChartData[0].points,
        rankRiding: 0,
        pointsRunning: this.competersArray[i].leaderboardPieChartData[1].points,
        rankRunning: 0,
        pointsSwimming: this.competersArray[i].leaderboardPieChartData[2]
          .points,
        rankSwimming: 0,
        pointsWalking: this.competersArray[i].leaderboardPieChartData[3].points,
        rankWalking: 0,
        position: i + 1
      };
    }
  }

  public getRidingRanks(): void {
    let auxArray = new Array();
    auxArray = Object.assign([], this.ranksArray);
    auxArray.sort(function(a, b) {
      return b.pointsRiding - a.pointsRiding || a.rankCombined - b.rankCombined;
    });

    for (let cont = 0; cont < auxArray.length; cont++) {
      auxArray[cont].position = cont + 1;
    }

    for (let el of this.ranksArray) {
      el.rankRiding = this.getAuxById(el.id, auxArray).position;
    }

    console.log("THIS IS ARRAY RANKED BY POINTS RIDING ");
    console.log(this.ranksArray);
  }

  public getRunningRanks(): void {
    let auxArray = new Array();
    auxArray = Object.assign([], this.ranksArray);
    auxArray.sort(function(a, b) {
      return (
        b.pointsRunning - a.pointsRunning || a.rankCombined - b.rankCombined
      );
    });

    for (let cont = 0; cont < auxArray.length; cont++) {
      auxArray[cont].position = cont + 1;
    }

    for (let el of this.ranksArray) {
      el.rankRunning = this.getAuxById(el.id, auxArray).position;
    }

    console.log("THIS IS ARRAY RANKED BY POINTS Running ");
    console.log(this.ranksArray);
  }

  public getSwimmingRanks(): void {
    let auxArray = new Array();
    auxArray = Object.assign([], this.ranksArray);
    auxArray.sort(function(a, b) {
      return (
        b.pointsSwimming - a.pointsSwimming || a.rankCombined - b.rankCombined
      );
    });

    for (let cont = 0; cont < auxArray.length; cont++) {
      auxArray[cont].position = cont + 1;
    }

    for (let el of this.ranksArray) {
      el.rankSwimming = this.getAuxById(el.id, auxArray).position;
    }

    console.log("THIS IS ARRAY RANKED BY POINTS Swimming ");
    console.log(this.ranksArray);
  }

  public getWalkingRanks(): void {
    let auxArray = new Array();
    auxArray = Object.assign([], this.ranksArray);
    auxArray.sort(function(a, b) {
      return (
        b.pointsWalking - a.pointsWalking || a.rankCombined - b.rankCombined
      );
    });

    for (let cont = 0; cont < auxArray.length; cont++) {
      auxArray[cont].position = cont + 1;
    }

    for (let el of this.ranksArray) {
      el.rankWalking = this.getAuxById(el.id, auxArray).position;
    }

    console.log("THIS IS ARRAY RANKED BY POINTS Walking ");
    console.log(this.ranksArray);
  }

  public getAuxById(id: number, list: ContestantRanks[]): ContestantRanks {
    for (let el of list) {
      if (el.id === id) {
        return el;
      }
    }
    return null;
  }

  public getRidingRankByContestant(contestant: ContestantCombined): number {
    for (let el of this.ranksArray) {
      if (el.id === contestant.id) {
        return el.rankRiding;
      }
    }
    return 0;
  }

  getRidingRank(contestant: ContestantCombined): number {
    for (let el of this.ranksArray) {
      if (el.id === contestant.id) {
        return el.rankRiding;
      }
    }
    return 0;
  }

  getRunningRank(contestant: ContestantCombined): number {
    for (let el of this.ranksArray) {
      if (el.id === contestant.id) {
        return el.rankRunning;
      }
    }
    return 0;
  }

  getSwimmingRank(contestant: ContestantCombined): number {
    for (let el of this.ranksArray) {
      if (el.id === contestant.id) {
        return el.rankSwimming;
      }
    }
    return 0;
  }

  getWalkingRank(contestant: ContestantCombined): number {
    for (let el of this.ranksArray) {
      if (el.id === contestant.id) {
        return el.rankWalking;
      }
    }
    return 0;
  }
}
