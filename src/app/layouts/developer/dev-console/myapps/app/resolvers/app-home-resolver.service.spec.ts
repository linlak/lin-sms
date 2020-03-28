import { TestBed } from '@angular/core/testing';

import { AppHomeResolverService } from './app-home-resolver.service';

describe('AppHomeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHomeResolverService = TestBed.get(AppHomeResolverService);
    expect(service).toBeTruthy();
  });
});
