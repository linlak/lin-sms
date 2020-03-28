import { TestBed } from '@angular/core/testing';

import { EmailEditResolverService } from './email-edit-resolver.service';

describe('EmailEditResolverService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: EmailEditResolverService = TestBed.inject(
			EmailEditResolverService
		);
		expect(service).toBeTruthy();
	});
});
