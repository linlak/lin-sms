import { TestBed } from '@angular/core/testing';

import { TutorialDetailsResolverService } from './tutorial-details-resolver.service';

describe('TutorialDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorialDetailsResolverService = TestBed.get(TutorialDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
