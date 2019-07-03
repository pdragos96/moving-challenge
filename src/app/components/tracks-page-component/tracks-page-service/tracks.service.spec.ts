import { TestBed } from '@angular/core/testing';

import { TracksPageService } from './tracks.service';

describe('TracksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TracksPageService = TestBed.get(TracksPageService);
    expect(service).toBeTruthy();
  });
});
