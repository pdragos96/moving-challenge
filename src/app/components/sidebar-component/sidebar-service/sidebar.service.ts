import { Injectable } from "@angular/core";
import { NavService } from "../../../services/nav-service/nav.service";
import { BottomNavigationService } from "../../bottom-navigation-component/bottom-navigation-service/bottom-navigation.service";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  constructor(
    private navService: NavService,
    private bottomService: BottomNavigationService
  ) {}

  public resetLists(): void {
    this.navService.resetLists();
  }

  public addFromFirstSearch(nume: string): void {
    if (nume === "") {
      this.makeFirstVoid();
    } else {
      this.navService.addFromFirstSearch(nume);
    }
  }

  public addFromSecondSearch(nume: string): void {
    if (nume === "") {
      this.makeSecondVoid();
    } else {
      this.navService.addFromSecondSearch(nume);
    }
  }

  public addFromThirdSearch(nume: string): void {
    if (nume === "") {
      this.makeThirdVoid();
    } else {
      this.navService.addFromThirdSearch(nume);
    }
  }

  public addFromFourthSearch(nume: string): void {
    if (nume === "") {
      this.makeFourthVoid();
    } else {
      this.navService.addFromFourthSearch(nume);
    }
  }

  public addFromFifthSearch(nume: string): void {
    if (nume === "") {
      this.makeFifthVoid();
    } else {
      this.navService.addFromFifthSearch(nume);
    }
  }

  public makeFirstVoid(): void {
    this.navService.makeFirstVoid();
  }

  public makeSecondVoid(): void {
    this.navService.makeSecondVoid();
  }

  public makeThirdVoid(): void {
    this.navService.makeThirdVoid();
  }

  public makeFourthVoid(): void {
    this.navService.makeFourthVoid();
  }

  public makeFifthVoid(): void {
    this.navService.makeFifthVoid();
  }
}
