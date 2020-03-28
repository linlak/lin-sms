import { TestBed } from '@angular/core/testing';

import { MyAppsDomainsResolverService } from './my-apps-domains-resolver.service';

describe('MyAppsDomainsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAppsDomainsResolverService = TestBed.get(MyAppsDomainsResolverService);
    expect(service).toBeTruthy();
  });
});
