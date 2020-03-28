/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageTutorialsService } from './manage-tutorials.service';

describe('Service: ManageTutorials', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTutorialsService]
    });
  });

  it('should ...', inject([ManageTutorialsService], (service: ManageTutorialsService) => {
    expect(service).toBeTruthy();
  }));
});
