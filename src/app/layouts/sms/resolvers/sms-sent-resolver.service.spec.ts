import { TestBed } from '@angular/core/testing';

import { SmsSentResolverService } from './sms-sent-resolver.service';

describe('SmsSentResolverService', () => {
  let service: SmsSentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsSentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
