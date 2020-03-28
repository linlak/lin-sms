import { TestBed } from '@angular/core/testing';

import { ManageUserSmspayResolverService } from './manage-user-smspay-resolver.service';

describe('ManageUserSmspayResolverService', () => {
  let service: ManageUserSmspayResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserSmspayResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
