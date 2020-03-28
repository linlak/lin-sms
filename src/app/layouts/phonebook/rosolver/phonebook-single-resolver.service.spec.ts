import { TestBed } from '@angular/core/testing';

import { PhonebookSingleResolverService } from './phonebook-single-resolver.service';

describe('PhonebookSingleResolverService', () => {
  let service: PhonebookSingleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonebookSingleResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
