import { Component, OnInit } from '@angular/core';
import { ContestantCombined } from '../../models/contestantCombined';
import { DetailsPageService } from './details-page-service/details-page.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  contestants = this.getListOfContestants();

  constructor(private navService: DetailsPageService) {} 
  ngOnInit() {}

  getListOfContestants(): ContestantCombined[] {
    return this.navService.getTheSixContestants();
  }

  getSelectedPage(): number {
    return this.navService.getSelectedPage();
  }
}
