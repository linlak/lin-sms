import { TestBed } from '@angular/core/testing';

import { AppHooksResolverService } from './app-hooks-resolver.service';

describe('AppHooksResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHooksResolverService = TestBed.get(AppHooksResolverService);
    expect(service).toBeTruthy();
  });
});
