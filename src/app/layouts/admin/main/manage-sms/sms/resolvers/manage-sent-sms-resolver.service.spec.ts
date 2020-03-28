import { TestBed } from '@angular/core/testing';

import { ManageSentSmsResolverService } from './manage-sent-sms-resolver.service';

describe('ManageSentSmsResolverService', () => {
  let service: ManageSentSmsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageSentSmsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
