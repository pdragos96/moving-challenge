import { Injectable } from '@angular/core';
import { NavService } from '../../../services/nav-service/nav.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BottomNavigationService {

  isFirstSelected: BehaviorSubject<boolean>;
  isSecondSelected: BehaviorSubject<boolean>;
  isThirdSelected: BehaviorSubject<boolean>;
  isFourthSelected: BehaviorSubject<boolean>;
  isFifthSelected: BehaviorSubject<boolean>;

  constructor(private navService: NavService) {
    this.isFirstSelected = new BehaviorSubject<boolean>(true);
    this.isSecondSelected = new BehaviorSubject<boolean>(false);
    this.isThirdSelected = new BehaviorSubject<boolean>(false);
    this.isFourthSelected = new BehaviorSubject<boolean>(false);
    this.isFifthSelected = new BehaviorSubject<boolean>(false);
   }

   public getDisplayedListSize(): number {
    return this.navService.getDisplayedListSize();
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
    if (this.navService.num[0] > 1) {
      for (let i = 0; i < 5; i++) {
        this.navService.num[i] = this.navService.num[i] - 1;
      }
    }
  }

  public increaseArray(): void {
    for (let i = 0; i < 5; i++) {
      this.navService.num[i] = this.navService.num[i] + 1;
    }
  }

  public decreaseArrayToFirst(): void {
    for (let i = 0; i < 5; i++) {
      this.navService.num[i] = i + 1;
    }
  }

  public increaseArrayToLast(): void {
    let cont = 0;
    for (let i = 4; i >= 0; i--) {
      this.navService.num[i] = this.navService.num[5] - cont;
      cont = cont + 1;
    }
  }

  public getNum(): number[] {
    return this.navService.num;
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
      return this.navService.num[0];
    }
    if (this.isSecondSelected.getValue() === true) {
      return this.navService.num[1];
    }
    if (this.isThirdSelected.getValue() === true) {
      return this.navService.num[2];
    }
    if (this.isFourthSelected.getValue() === true) {
      return this.navService.num[3];
    }
    if (this.isFifthSelected.getValue() === true) {
      return this.navService.num[4];
    }
    return 0;
  }

  public resetNavigation(): void {
    this.decreaseArrayToFirst();
    this.allFalse();
    this.changeFirst();
  }

  public getVisibility(): string {
    if (this.navService.getDisplayedListSize() % 6 == 0) {
      if (this.navService.getDisplayedListSize() / 6 == this.getSelectedPage()) {
        return 'hidden';
      }
    } else {
        if (Math.trunc (this.navService.getDisplayedListSize() / 6) + 1 == this.getSelectedPage() ) {
        return 'hidden';
      }
    }
    if (this.navService.getDisplayedListSize() == 0) {return "hidden";}
    return 'visible';
  }

}
