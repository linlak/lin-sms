import { TestBed } from '@angular/core/testing';

import { MyAppsResolverService } from './my-apps-resolver.service';

describe('MyAppsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAppsResolverService = TestBed.get(MyAppsResolverService);
    expect(service).toBeTruthy();
  });
});
