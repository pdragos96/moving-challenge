// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class TracksDataService {
  userId = 0;
  // tslint:disable-next-line: quotemark
  userAvatar = "";

  constructor() {}

  public setId(newValue: number): void {
    this.userId = newValue;
  }

  public setAvatar(newValue: string): void {
    this.userAvatar = newValue;
  }

  public getId(): number {
    return this.userId;
  }

  public getAvatar(): string {
    return this.userAvatar;
  }
}
