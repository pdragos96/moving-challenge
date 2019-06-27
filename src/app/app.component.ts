import { Component } from '@angular/core';
import { NavService } from './services/nav-service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moving-challenge';

  constructor(private navService: NavService) {
    this.navService.get_data()
  }
}
