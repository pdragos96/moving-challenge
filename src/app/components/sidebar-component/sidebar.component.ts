import { Component, OnInit } from "@angular/core";

import { SidebarService } from "./sidebar-service/sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  contorSearch: number = 1;

  constructor(private navService: SidebarService) {}

  ngOnInit() {}

  public changeHappened(nume: string): void {
    this.navService.addFromFirstSearch(nume);
  }

  public changeInSecondSearchBox(nume: string): void {
    // console.log("AM PRIMIT PRIMIT PRIMIT" + nume);
    this.navService.addFromSecondSearch(nume);
  }

  public changeInThirdSearchBox(nume: string): void {
    this.navService.addFromThirdSearch(nume);
  }

  public changeInFourthSearchBox(nume: string): void {
    this.navService.addFromFourthSearch(nume);
  }

  public changeInFifthSearchBox(nume: string): void {
    this.navService.addFromFifthSearch(nume);
  }

  public firstButtonClicked(): void {
    this.contorSearch++;
  }

  public secondButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("second")).value = "";
    this.contorSearch = 1;
    this.changeInSecondSearchBox("");
    this.changeInThirdSearchBox("");
    this.changeInFourthSearchBox("");
    this.changeInFifthSearchBox("");
  }

  public thirdButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("third")).value = "";
    this.contorSearch = 2;
    this.changeInThirdSearchBox("");
    this.changeInFourthSearchBox("");
    this.changeInFifthSearchBox("");
  }

  public fourthButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("fourth")).value = "";
    this.contorSearch = 3;
    this.changeInFourthSearchBox("");
    this.changeInFifthSearchBox("");
  }

  public fifthButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("fifth")).value = "";
    this.contorSearch = 4;
    this.changeInFifthSearchBox("");
  }

  public getSecondVisibility(): string {
    if (this.contorSearch >= 2) {
      return "visible";
    }
    return "hidden";
  }

  public getThirdVisibility(): string {
    if (this.contorSearch >= 3) {
      return "visible";
    }
    return "hidden";
  }

  public getFourthVisibility(): string {
    if (this.contorSearch >= 4) {
      return "visible";
    }
    return "hidden";
  }

  public getFifthVisibility(): string {
    if (this.contorSearch >= 5) {
      return "visible";
    }
    return "hidden";
  }
}
