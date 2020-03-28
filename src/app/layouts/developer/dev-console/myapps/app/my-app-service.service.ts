import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MyAppServiceService {
	constructor(
		private auth: AuthService,
		private http: HttpClient,
		private dev: DeveloperService
	) {}

	public getMyAppByIdString(id: string, page: string): Observable<any> {
		return this.dev.getMyApp(id, page);
	}
	public editApp(app: any, page: string = ''): Observable<any> {
		return this.http.post(`/developers/console/edit-app${page}`, app);
	}

	public getHookDomains(): Observable<any[]> {
		return this.http.get('/developers/console/hook-domain').pipe(
			map((data: { mydomains: any[] }) => {
				if (data.mydomains) {
					return data.mydomains;
				}
				return [];
			})
		);
	}
}
