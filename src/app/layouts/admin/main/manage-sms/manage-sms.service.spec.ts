import { TestBed } from '@angular/core/testing';

import { ManageSmsService } from './manage-sms.service';

describe('ManageSmsService', () => {
  let service: ManageSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
