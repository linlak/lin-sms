import { TestBed } from '@angular/core/testing';

import { AppSettingsResolverService } from './app-settings-resolver.service';

describe('AppSettingsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSettingsResolverService = TestBed.get(AppSettingsResolverService);
    expect(service).toBeTruthy();
  });
});
