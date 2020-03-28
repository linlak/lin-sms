import { TestBed } from '@angular/core/testing';

import { MyAppServiceService } from './my-app-service.service';

describe('MyAppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAppServiceService = TestBed.get(MyAppServiceService);
    expect(service).toBeTruthy();
  });
});
