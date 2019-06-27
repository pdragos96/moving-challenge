import { Injectable } from '@angular/core';
import { NavService } from '../../../services/nav-service/nav.service';
import { BottomNavigationService } from '../../bottom-navigation-component/bottom-navigation-service/bottom-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private navService: NavService, private bottomService:BottomNavigationService) {

   }

  public resetLists(): void {
    this.navService.resetLists();
  }

  public showElementsThatContainString(nume: string): void {
    this.navService.constructListThatContainString(nume);
    this.bottomService.resetNavigation();
  }
}
