import { TestBed } from '@angular/core/testing';

import { ProfileEditResolverService } from './profile-edit-resolver.service';

describe('ProfileEditResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileEditResolverService = TestBed.get(ProfileEditResolverService);
    expect(service).toBeTruthy();
  });
});
