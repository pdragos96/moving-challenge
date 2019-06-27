import {
  Component,
  OnInit
} from '@angular/core';

import { SidebarService } from './sidebar-service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private navService: SidebarService) {}

  ngOnInit() {}

  public changeHappened(nume: string): void {
    if (nume === '') {
      this.navService.resetLists();
    } else {
      this.navService.showElementsThatContainString(nume);
    }
  }
}
