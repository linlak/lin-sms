import { TestBed } from '@angular/core/testing';

import { ManageQuotesService } from './manage-quotes.service';

describe('ManageQuotesService', () => {
  let service: ManageQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
