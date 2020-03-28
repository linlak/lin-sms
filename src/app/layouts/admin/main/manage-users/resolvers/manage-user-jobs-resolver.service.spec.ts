import { TestBed } from '@angular/core/testing';

import { ManageUserJobsResolverService } from './manage-user-jobs-resolver.service';

describe('ManageUserJobsResolverService', () => {
  let service: ManageUserJobsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserJobsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
