/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageUsersProfileResolverService } from './manage-users-profile-resolver.service';

describe('Service: ManageUsersProfileResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersProfileResolverService]
    });
  });

  it('should ...', inject([ManageUsersProfileResolverService], (service: ManageUsersProfileResolverService) => {
    expect(service).toBeTruthy();
  }));
});
