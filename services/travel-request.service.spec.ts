import { TestBed } from '@angular/core/testing';

import { TravelRequestService } from './travel-request.service';

describe('TravelRequestService', () => {
  let service: TravelRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
