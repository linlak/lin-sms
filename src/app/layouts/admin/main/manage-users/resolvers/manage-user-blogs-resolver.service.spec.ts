import { TestBed } from '@angular/core/testing';

import { ManageUserBlogsResolverService } from './manage-user-blogs-resolver.service';

describe('ManageUserBlogsResolverService', () => {
  let service: ManageUserBlogsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserBlogsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
