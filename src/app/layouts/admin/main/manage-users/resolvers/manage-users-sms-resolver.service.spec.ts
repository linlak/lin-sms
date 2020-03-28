/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageUsersSmsResolverService } from './manage-users-sms-resolver.service';

describe('Service: ManageUsersSmsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersSmsResolverService]
    });
  });

  it('should ...', inject([ManageUsersSmsResolverService], (service: ManageUsersSmsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
