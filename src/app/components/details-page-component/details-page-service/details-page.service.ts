import { Injectable } from '@angular/core';
import { NavService } from 'src/app/services/nav-service/nav.service';
import { ContestantCombined } from 'src/app/models/contestantCombined';
import { BottomNavigationService } from '../../bottom-navigation-component/bottom-navigation-service/bottom-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsPageService {

  constructor(private navService: NavService, private bottomService: BottomNavigationService) { }

  getTheSixContestants(): ContestantCombined[] {
    return this.navService.getTheSixContestants(this.bottomService.getSelectedPage());
  }

  getSelectedPage(): number {
    return this.bottomService.getSelectedPage();
  }

}
