import { TestBed } from '@angular/core/testing';

import { PhonebookResolverService } from './phonebook-resolver.service';

describe('PhonebookResolverService', () => {
  let service: PhonebookResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonebookResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
