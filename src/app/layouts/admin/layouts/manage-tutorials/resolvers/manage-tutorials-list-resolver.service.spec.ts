/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageTutorialsListResolverService } from './manage-tutorials-list-resolver.service';

describe('Service: ManageTutorialsListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTutorialsListResolverService]
    });
  });

  it('should ...', inject([ManageTutorialsListResolverService], (service: ManageTutorialsListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
