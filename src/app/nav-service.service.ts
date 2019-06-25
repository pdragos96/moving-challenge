import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  isFirstSelected:BehaviorSubject<boolean>;
  isSecondSelected:BehaviorSubject<boolean>;
  isThirdSelected:BehaviorSubject<boolean>;
  isFourthSelected:BehaviorSubject<boolean>;
  isFifthSelected:BehaviorSubject<boolean>;
  num: number[] = new Array(6);

  constructor() {  
    this.isFirstSelected = new BehaviorSubject<boolean>(true);
    this.isSecondSelected = new BehaviorSubject<boolean>(false);
    this.isThirdSelected = new BehaviorSubject<boolean>(false);
    this.isFourthSelected = new BehaviorSubject<boolean>(false); 
    this.isFifthSelected = new BehaviorSubject<boolean>(false);
  }

  public allFalse():void{
    this.isFirstSelected = new BehaviorSubject<boolean>(false);
    this.isSecondSelected = new BehaviorSubject<boolean>(false);
    this.isThirdSelected = new BehaviorSubject<boolean>(false);
    this.isFourthSelected = new BehaviorSubject<boolean>(false); 
    this.isFifthSelected = new BehaviorSubject<boolean>(false);  
  }

  public changeFirst():void {
    this.isFirstSelected.next(!this.isFirstSelected.getValue());
  }

  public changeSecond():void {
    this.isSecondSelected.next(!this.isFirstSelected.getValue());
  }

  public changeThird():void {
    this.isThirdSelected.next(!this.isFirstSelected.getValue());
  }

  public changeFourth():void {
    this.isFourthSelected.next(!this.isFirstSelected.getValue());
  }

  public changeFifth():void {
    this.isFifthSelected.next(!this.isFirstSelected.getValue());
  }

  public initializeNums():void {
    for (var i=0; i < 5; i++){
      this.num[i] = i + 1;
    }
    this.num[5] = 18;
  }

  public decreaseArray():void {
    if (this.num[0] > 1) 
    {
      for (var i = 0; i < 5; i++) {
        this.num[i] = this.num[i] - 1;
      }
    }
  }

  public increaseArray():void {
    for (var i = 0; i < 5; i++) {
        this.num[i] = this.num[i] + 1;
    }
  }

  public decreaseArrayToFirst():void {
    for (var i = 0; i < 5; i++) {
      this.num[i] = i+1;
    }
  }

  public increaseArrayToLast():void {
    var cont = 0;
    for (var i=4; i>=0; i--) {
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
}
