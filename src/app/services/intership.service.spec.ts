import { TestBed, inject } from '@angular/core/testing';

import { IntershipService } from './intership.service';

describe('IntershipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntershipService]
    });
  });

  it('should be created', inject([IntershipService], (service: IntershipService) => {
    expect(service).toBeTruthy();
  }));
});
