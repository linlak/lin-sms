import { Injectable } from '@angular/core';
import { ManageQuotesService } from '../manage-quotes.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ManageQuotesResolverService implements Resolve<any[]> {
	constructor(private quotesService: ManageQuotesService) {}

	resolve(): Observable<any[]> {
		return this.quotesService.getQoutes();
	}
}
