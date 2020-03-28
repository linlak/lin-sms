import { TestBed } from '@angular/core/testing';

import { NavToggleService } from './nav-toggle.service';

describe('NavToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavToggleService = TestBed.get(NavToggleService);
    expect(service).toBeTruthy();
  });
});
