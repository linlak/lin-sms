import { TestBed, async, inject } from '@angular/core/testing';

import { SmsGuard } from './sms.guard';

describe('SmsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsGuard]
    });
  });

  it('should ...', inject([SmsGuard], (guard: SmsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
