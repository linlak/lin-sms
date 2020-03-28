import { TestBed } from '@angular/core/testing';

import { ManageUserTokensResolverService } from './manage-user-tokens-resolver.service';

describe('ManageUserTokensResolverService', () => {
  let service: ManageUserTokensResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserTokensResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
