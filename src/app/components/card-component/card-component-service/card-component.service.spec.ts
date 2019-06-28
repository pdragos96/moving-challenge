import { TestBed } from '@angular/core/testing';

import { CardComponentService } from './card-component.service';

describe('CardComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardComponentService = TestBed.get(CardComponentService);
    expect(service).toBeTruthy();
  });
});
