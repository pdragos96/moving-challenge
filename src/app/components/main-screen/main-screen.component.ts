import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav-service/nav.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

  public getIsLoaded(): boolean {
    if (this.navService.getDisplayedListSize() > 0) return true;
    return false;
  }

}
