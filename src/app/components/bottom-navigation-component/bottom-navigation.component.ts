import { Component, AfterViewChecked } from '@angular/core';
import { BottomNavigationService } from './bottom-navigation-service/bottom-navigation.service';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements AfterViewChecked {
  constructor(private navService: BottomNavigationService) {}

  ngAfterViewChecked() {
    this.beginClicked();
  }

  firstClicked() {
    console.log('SAL 1');
    if (this.navService.isFirstSelected.getValue() === false) {
      if (this.navService.getNum()[0] != 1) {
        if (this.navService.getNum()[0] === 2) {
          this.navService.decreaseArray();
          this.navService.allFalse();
          this.navService.changeSecond();
          return;
        }
        this.navService.decreaseArray();
        this.navService.decreaseArray();
        this.navService.allFalse();
        this.navService.changeThird();
        return;
      }
      this.navService.allFalse();
      this.navService.changeFirst();
    }
  }

  fifthClicked() {
    console.log('SAL 5');
    if (this.navService.isFifthSelected.getValue() === false) {
      if (this.navService.getNum()[4] != this.navService.getNum()[5]) {
        if (this.navService.getNum()[4] === this.navService.getNum()[5] - 1) {
          this.navService.increaseArray();
          this.navService.allFalse();
          this.navService.changeFourth();
          return;
        }
        this.navService.increaseArray();
        this.navService.increaseArray();
        this.navService.allFalse();
        this.navService.changeThird();
        return;
      }
      this.navService.allFalse();
      this.navService.changeFifth();
    }
  }

  secondClicked() {
    console.log('SAL 2');
    if (this.navService.isSecondSelected.getValue() === false) {
      this.navService.allFalse();
      this.navService.changeSecond();
      if (this.navService.getNum()[0] > 1) {
        this.decreaseByOne();
        this.thirdClicked();
      }
    }
  }

  thirdClicked() {
    console.log('SAL 3');
    this.navService.allFalse();
    this.navService.changeThird();
  }

  fourthClicked() {
    console.log('SAL 4');
    if (this.navService.isFourthSelected.getValue() === false) {
      this.navService.allFalse();
      this.navService.changeFourth();
      if (this.navService.getNum()[4] < this.navService.getNum()[5]) {
        this.increaseByOne();
        this.thirdClicked();
      }
    }
  }

  isFirstSelected(): boolean {
    if (this.navService.isFirstSelected.getValue() === true) {
      return true;
    }
    return false;
  }

  isSecondSelected(): boolean {
    if (this.navService.isSecondSelected.getValue() === true) {
      return true;
    }
    return false;
  }

  isThirdSelected(): boolean {
    if (this.navService.isThirdSelected.getValue() === true) {
      return true;
    }
    return false;
  }

  isFourthSelected(): boolean {
    if (this.navService.isFourthSelected.getValue() === true) {
      return true;
    }
    return false;
  }

  isFifthSelected(): boolean {
    if (this.navService.isFifthSelected.getValue() === true) {
      return true;
    }
    return false;
  }

  getFirstButtonNumber(): number {
    return this.navService.getNum()[0];
  }

  getSecondButtonNumber(): number {
    return this.navService.getNum()[1];
  }

  getThirdButtonNumber(): number {
    return this.navService.getNum()[2];
  }

  getFourthButtonNumber(): number {
    return this.navService.getNum()[3];
  }

  getFifthButtonNumber(): number {
    return this.navService.getNum()[4];
  }

  decreaseToFirst(): void {
    this.navService.decreaseArrayToFirst();
  }

  decreaseByOne(): void {
    this.navService.decreaseArray();
  }

  increaseByOne(): void {
    this.navService.increaseArray();
  }

  increaseToLast(): void {
    this.navService.increaseArrayToLast();
  }

  beginClicked(): void {
    this.decreaseToFirst();
    this.firstClicked();
  }

  previousClicked(): void {
    if (this.navService.isFirstSelected.getValue() === true) {
      return;
    }

    if (this.navService.isSecondSelected.getValue() === true) {
      this.firstClicked();
      return;
    }

    if (this.navService.isFourthSelected.getValue() === true) {
      this.thirdClicked();
      return;
    }

    if (this.navService.isFifthSelected.getValue() === true) {
      this.fourthClicked();
      return;
    }

    this.secondClicked();
  }

  nextClicked(): void {
    if (this.navService.isFirstSelected.getValue() === true) {
      this.secondClicked();
      return;
    }

    if (this.navService.isSecondSelected.getValue() === true) {
      this.thirdClicked();
      return;
    }

    if (this.navService.isFourthSelected.getValue() === true) {
      this.fifthClicked();
      return;
    }
    if (this.navService.isFifthSelected.getValue() === true) {
      return;
    }
    this.fourthClicked();
  }

  lastClicked(): void {
    this.increaseToLast();
    this.fifthClicked();
  }

  getVisibilityTwo(): string {
    if (this.navService.getDisplayedListSize() <= 6) {
      return 'hidden';
    }
    return 'visible';
  }

  getVisibilityThree(): string {
    if (this.navService.getDisplayedListSize() <= 12) {
      return 'hidden';
    }
    return 'visible';
  }

  getVisibilityFour(): string {
    if (this.navService.getDisplayedListSize() <= 18) {
      return 'hidden';
    }
    return 'visible';
  }

  getVisibilityFive(): string {
    if (this.navService.getDisplayedListSize() <= 24) {
      return 'hidden';
    }
    return 'visible';
  }
}
