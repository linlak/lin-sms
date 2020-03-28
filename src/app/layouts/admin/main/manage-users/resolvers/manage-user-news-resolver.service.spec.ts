import { TestBed } from '@angular/core/testing';

import { ManageUserNewsResolverService } from './manage-user-news-resolver.service';

describe('ManageUserNewsResolverService', () => {
  let service: ManageUserNewsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserNewsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
