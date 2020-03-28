/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageUsersListResolverService } from './manage-users-list-resolver.service';

describe('Service: ManageUsersListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersListResolverService]
    });
  });

  it('should ...', inject([ManageUsersListResolverService], (service: ManageUsersListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
