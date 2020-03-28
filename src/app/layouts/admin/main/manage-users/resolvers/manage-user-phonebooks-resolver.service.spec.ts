import { TestBed } from '@angular/core/testing';

import { ManageUserPhonebooksResolverService } from './manage-user-phonebooks-resolver.service';

describe('ManageUserPhonebooksResolverService', () => {
  let service: ManageUserPhonebooksResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserPhonebooksResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
