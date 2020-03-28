import { TestBed } from '@angular/core/testing';

import { AppStatsResolverService } from './app-stats-resolver.service';

describe('AppStatsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStatsResolverService = TestBed.get(AppStatsResolverService);
    expect(service).toBeTruthy();
  });
});
