import { TestBed } from '@angular/core/testing';

import { PayMtdResolverService } from './pay-mtd-resolver.service';

describe('PayMtdResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayMtdResolverService = TestBed.get(PayMtdResolverService);
    expect(service).toBeTruthy();
  });
});
