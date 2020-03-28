import { TestBed } from '@angular/core/testing';

import { AllTututoriasResolverService } from './all-tututorias-resolver.service';

describe('AllTututoriasResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllTututoriasResolverService = TestBed.get(AllTututoriasResolverService);
    expect(service).toBeTruthy();
  });
});
