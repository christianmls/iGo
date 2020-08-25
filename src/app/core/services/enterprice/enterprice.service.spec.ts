import { TestBed } from '@angular/core/testing';

import { EnterpriceService } from './enterprice.service';

describe('EnterpriceService', () => {
  let service: EnterpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
