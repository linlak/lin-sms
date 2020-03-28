import { TestBed } from '@angular/core/testing';

import { SmsPaymentsResolverService } from './sms-payments-resolver.service';

describe('SmsPaymentsResolverService', () => {
  let service: SmsPaymentsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsPaymentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
