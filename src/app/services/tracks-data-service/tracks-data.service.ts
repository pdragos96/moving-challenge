import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TracksDataService {
  userId: number = 0;
  userAvatar: string = "";

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
