import { Component, OnInit, Input } from '@angular/core';
import { NavService } from '../../services/nav-service/nav.service';
import { ContestantCombined } from '../../models/contestantCombined';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  selectedPage: number;

  @Input()
  public contestant: ContestantCombined;

  constructor(private navService: NavService) {}

  ngOnInit() {}

  getRidingRank(): string {
    return "UNRANKED";
  }

  getRunningRank(): string {
    return "UNRANKED";
  }

  getSwimmingRank(): string {
    return "UNRANKED";
  }

  getWalkingRank(): string {
    return "UNRANKED";
  }
}
