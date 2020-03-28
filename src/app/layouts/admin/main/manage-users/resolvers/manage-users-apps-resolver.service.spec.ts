/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageUsersAppsResolverService } from './manage-users-apps-resolver.service';

describe('Service: ManageUsersAppsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersAppsResolverService]
    });
  });

  it('should ...', inject([ManageUsersAppsResolverService], (service: ManageUsersAppsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
