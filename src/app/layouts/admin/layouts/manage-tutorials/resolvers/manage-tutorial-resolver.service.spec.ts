/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageTutorialResolverService } from './manage-tutorial-resolver.service';

describe('Service: ManageTutorialResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTutorialResolverService]
    });
  });

  it('should ...', inject([ManageTutorialResolverService], (service: ManageTutorialResolverService) => {
    expect(service).toBeTruthy();
  }));
});
