import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from 'src/app/layouts/admin/admin-shared/administration/admin.service';
import { Tutorial, TutorialAction } from 'src/app/shared/models/tutorials';

@Injectable({
	providedIn: 'root'
})
export class ManageTutorialsService {
	constructor(private admin: AdminService, private http: HttpClient) {}

	public getAllTutorials(): Observable<Tutorial[]> {
		console.log(AdminService.adminUrl);
		return this.http.get(`${AdminService.adminUrl}/tutorials`).pipe(
			map((data: { tutorials: Tutorial[] }) => {
				if (data.tutorials) {
					return data.tutorials;
				}
				return [];
			})
		);
	}
	public getTutorialById(id: string | number): Observable<Tutorial | never> {
		console.log(AdminService.adminUrl);
		return this.http.get(`${AdminService.adminUrl}/tutorials/${id}`).pipe(
			map((data: { tutorial: Tutorial }) => {
				if (data.tutorial) {
					return data.tutorial;
				}
			})
		);
	}

	public updateTutorial(
		tutorial: Tutorial,
		action: TutorialAction
	): Observable<any> {
		const tutorialData: Tutorial = {
			id: tutorial.id,
			body: tutorial.body,
			action
		};
		return this.http.post(`${AdminService.adminValUrl}/tutorial`, tutorialData);
	}
}
