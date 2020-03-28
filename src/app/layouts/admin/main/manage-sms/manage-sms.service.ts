import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from '../../admin-shared/administration/admin.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ManageSmsService {
	constructor(private http: HttpClient, private adminService: AdminService) {}

	public getSmsList(url: string = ''): Observable<any> {
		return this.http.get(`${AdminService.adminUrl}/sms${url}`).pipe(
			map((data: { smslist: any[]; sub_title: string }) => {
				return { sms: data.smslist || [], sub_title: data.sub_title };
			})
		);
	}
}
