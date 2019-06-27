import { TestBed } from '@angular/core/testing';

import { DetailsPageService } from './details-page.service';

describe('DetailsPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsPageService = TestBed.get(DetailsPageService);
    expect(service).toBeTruthy();
  });
});
