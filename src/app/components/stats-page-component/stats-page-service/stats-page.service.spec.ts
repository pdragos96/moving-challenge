import { TestBed } from '@angular/core/testing';

import { StatsPageService } from './stats-page.service';

describe('StatsPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatsPageService = TestBed.get(StatsPageService);
    expect(service).toBeTruthy();
  });
});
