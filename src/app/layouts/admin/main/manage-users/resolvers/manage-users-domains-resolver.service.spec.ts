/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageUsersDomainsResolverService } from './manage-users-domains-resolver.service';

describe('Service: ManageUsersDomainsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersDomainsResolverService]
    });
  });

  it('should ...', inject([ManageUsersDomainsResolverService], (service: ManageUsersDomainsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
