import { TestBed } from '@angular/core/testing';

import { ManageQuotesResolverService } from './manage-quotes-resolver.service';

describe('ManageQuotesResolverService', () => {
  let service: ManageQuotesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQuotesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
