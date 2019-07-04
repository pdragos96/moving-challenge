import { Component, OnInit } from "@angular/core";

import { SidebarService } from "./sidebar-service/sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  isSecondVisible: boolean = false;
  isThirdVisible: boolean = false;
  isFourthVisible: boolean = false;
  isFifthVisible: boolean = false;

  constructor(private navService: SidebarService) {}

  ngOnInit() {}

  public changeHappened(nume: string): void {
    this.navService.addFromFirstSearch(nume);
  }

  public changeInSecondSearchBox(nume: string): void {
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
    if (this.isSecondVisible === false) {this.isSecondVisible = true; return;}
    if (this.isThirdVisible === false) {this.isThirdVisible = true; return;}
    if (this.isFourthVisible === false) {this.isFourthVisible = true; return;}
    if (this.isFifthVisible === false) {this.isFifthVisible = true; return;}
  }

  public secondButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("second")).value = "";
    this.isSecondVisible = false;
    this.changeInSecondSearchBox("");

  }

  public thirdButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("third")).value = "";
    this.isThirdVisible = false;
    this.changeInThirdSearchBox("");

  }

  public fourthButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("fourth")).value = "";
    this.isFourthVisible = false;
    this.changeInFourthSearchBox("");
  }

  public fifthButtonClicked(): void {
    (<HTMLInputElement>document.getElementById("fifth")).value = "";
    this.isFifthVisible = false;
    this.changeInFifthSearchBox("");
  }

  public getSecondVisibility(): string {
    if (this.isSecondVisible === true) {
      return "visible";
    }
    return "hidden";
  }

  public getThirdVisibility(): string {
    if (this.isThirdVisible === true) {
      return "visible";
    }
    return "hidden";
  }

  public getFourthVisibility(): string {
    if (this.isFourthVisible === true) {
      return "visible";
    }
    return "hidden";
  }

  public getFifthVisibility(): string {
    if (this.isFifthVisible === true) {
      return "visible";
    }
    return "hidden";
  }

  public getThirdMargin(): string {
    if (this.isThirdVisible) {
      if (!this.isSecondVisible) {
        return "-61px";
      } 
    }
    return "0px";
  }

  public getFourthMargin(): string {
    if (this.isFourthVisible) {
      if (!this.isThirdVisible && !this.isSecondVisible) {
        return "-122px";
      }
      if (!this.isThirdVisible) {
        return "-61px";
      }
    }
    return "0px";
  }

  public getFifthMargin(): string {
    if (this.isFifthVisible) {
      if (!this.isFourthVisible && !this.isThirdVisible && !this.isSecondVisible) {
        return "-183px";
      }
      if (!this.isFourthVisible && !this.isThirdVisible) {
        return "-122px";
      }
      if (!this.isFourthVisible) {
        return "-61px";
      }
    }
    return "0px";
  }

}
