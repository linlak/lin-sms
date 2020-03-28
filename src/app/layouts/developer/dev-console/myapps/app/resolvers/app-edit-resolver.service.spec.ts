import { TestBed } from '@angular/core/testing';

import { AppEditResolverService } from './app-edit-resolver.service';

describe('AppEditResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppEditResolverService = TestBed.get(AppEditResolverService);
    expect(service).toBeTruthy();
  });
});
