import { Component, OnInit } from '@angular/core';
import {NavService} from "../nav-service.service"

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {

  constructor(private navService: NavService) {
    this.navService.initializeNums(); 
  }

  ngOnInit() {
  }
  firstClicked() {
    console.log("SAL 1");
    this.navService.allFalse();
    this.navService.changeFirst();
  }

  secondClicked() {
    console.log("SAL 2");
      if (this.navService.isSecondSelected.getValue() === false) {
      this.navService.allFalse();
      this.navService.changeSecond();
      if (this.navService.num[0] > 1) {
        this.decreaseByOne();
        this.thirdClicked();
      }
    }
  }

  thirdClicked() {
    console.log("SAL 3");
    this.navService.allFalse();
    this.navService.changeThird();
  }

  fourthClicked() {
    console.log("SAL 4");
    if (this.navService.isFourthSelected.getValue() === false) {
      this.navService.allFalse();
      this.navService.changeFourth();
      if (this.navService.num[4] < this.navService.num[5]) {
        this.increaseByOne();
        this.thirdClicked();
      }
    }
  }

  fifthClicked() {
    console.log("SAL 5");
    this.navService.allFalse();
    this.navService.changeFifth();
  }

  isFirstSelected():boolean {
    if (this.navService.isFirstSelected.getValue() == true) return true;
    return false;
  }

  isSecondSelected():boolean {
    if (this.navService.isSecondSelected.getValue() == true) return true;
    return false;
  }

  isThirdSelected():boolean {
    if (this.navService.isThirdSelected.getValue() == true) return true;
    return false;
  }

  isFourthSelected():boolean {
    if (this.navService.isFourthSelected.getValue() == true) return true;
    return false;
  }

  isFifthSelected():boolean {
    if (this.navService.isFifthSelected.getValue() == true) return true;
    return false;
  }

  getFirstButtonNumber():number {
    return this.navService.num[0];
  }

  getSecondButtonNumber():number {
    return this.navService.num[1];
  }

  getThirdButtonNumber():number {
    return this.navService.num[2];
  }

  getFourthButtonNumber():number {
    return this.navService.num[3];
  }

  getFifthButtonNumber():number {
    return this.navService.num[4];
  }

  decreaseToFirst():void{
    this.navService.decreaseArrayToFirst();
  }

  decreaseByOne():void{
    this.navService.decreaseArray();
  }

  increaseByOne():void{
      this.navService.increaseArray();
  }

  increaseToLast():void{
    this.navService.increaseArrayToLast();
  }

  beginClicked():void {
    this.decreaseToFirst();
    this.firstClicked();
  }

  previousClicked():void {
    if (this.navService.isFirstSelected.getValue() === true ) {
      return;
    }

    if (this.navService.isSecondSelected.getValue() === true ) {
      this.firstClicked();
      return;
    }

    if ( this.navService.isFourthSelected.getValue() === true ) {
      this.thirdClicked();
      return;
    }

    if (this.navService.isFifthSelected.getValue() === true ) {
      this.fourthClicked();
      return;
    }

    this.secondClicked();

  }

  nextClicked():void {
    if (this.navService.isFirstSelected.getValue() === true ) {
      this.secondClicked();
      return;
    } 

    if (this.navService.isSecondSelected.getValue() === true ) {
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

  lastClicked():void {
    this.increaseToLast();
    this.fifthClicked();
  }

}
