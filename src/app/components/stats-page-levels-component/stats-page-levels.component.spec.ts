import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPageLevelsComponent } from './stats-page-levels.component';

describe('StatsPageLevelsComponent', () => {
  let component: StatsPageLevelsComponent;
  let fixture: ComponentFixture<StatsPageLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsPageLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPageLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
