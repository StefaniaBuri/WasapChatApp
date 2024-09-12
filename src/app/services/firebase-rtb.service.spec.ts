import { TestBed } from '@angular/core/testing';

import { FirebaseRTBService } from './firebase-rtb.service';

describe('FirebaseRTBService', () => {
  let service: FirebaseRTBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseRTBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
