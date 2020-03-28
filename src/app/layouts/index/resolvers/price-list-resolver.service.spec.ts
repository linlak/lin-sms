import { TestBed } from '@angular/core/testing';

import { PriceListResolverService } from './price-list-resolver.service';

describe('PriceListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceListResolverService = TestBed.get(PriceListResolverService);
    expect(service).toBeTruthy();
  });
});
