import { Component, OnInit, Input } from "@angular/core";

import { NavService } from "../nav-service.service";
import { ContestantCombined } from "../contestantCombined";
import { CONTESTANTS } from "../mockContestants";

@Component({
  selector: "app-card-component",
  templateUrl: "./card-component.component.html",
  styleUrls: ["./card-component.component.scss"]
})
export class CardComponentComponent implements OnInit {
  selectedPage: number;

  @Input()
  public contestant: ContestantCombined;

  constructor(private navService: NavService) {}

  ngOnInit() {}
}
