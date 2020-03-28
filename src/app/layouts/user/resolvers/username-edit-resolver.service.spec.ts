import { TestBed } from '@angular/core/testing';

import { UsernameEditResolverService } from './username-edit-resolver.service';

describe('UsernameEditResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernameEditResolverService = TestBed.get(UsernameEditResolverService);
    expect(service).toBeTruthy();
  });
});
