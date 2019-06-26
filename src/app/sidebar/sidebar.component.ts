import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from "@angular/core";
import { NavService } from "../nav-service.service";

import { ContestantCombined } from "../contestantCombined";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(private navService: NavService) {}

  ngOnInit() {}

  public changeHappened(nume: string): void {
    console.log("CHANGE HAPPENED " + nume);
    if (nume === "") {
      this.navService.resetLists();
    } else {
      this.navService.showElementsThatContainString(nume);
    }
  }
}
