import { TestBed } from '@angular/core/testing';

import { AppMessagesResolverService } from './app-messages-resolver.service';

describe('AppMessagesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMessagesResolverService = TestBed.get(AppMessagesResolverService);
    expect(service).toBeTruthy();
  });
});
