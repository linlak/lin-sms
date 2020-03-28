import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../admin-shared/administration/admin.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ManageQuotesService {
	constructor(private http: HttpClient, private adminService: AdminService) {}

	public getQoutes(): Observable<any> {
		return this.http.get(`${AdminService.adminUrl}/quotes`).pipe(
			map((data: { quotes: any[] }) => {
				if (data.quotes) {
					return data.quotes;
				}
				return [];
			})
		);
	}
}
