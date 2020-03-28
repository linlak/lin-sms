import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tutorial } from '../models/tutorials';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DeveloperService {
	constructor(private http: HttpClient) {}
	// tutorials
	public getAllTutorials(): Observable<Tutorial[]> {
		return this.http.get('/developers/tutorials').pipe(
			map((data: { tutorials: Tutorial[] }) => {
				if (data.tutorials) {
					return data.tutorials;
				}
				return [];
			})
		);
	}

	public getTutorialByLink(tutlink: string): Observable<Tutorial | never> {
		return this.http.get(`/developers/tutorials/${tutlink}`).pipe(
			map((data: { tutorial: Tutorial }) => {
				if (data.tutorial) {
					return data.tutorial;
				}
			})
		);
	}

	// console

	public getMyDomains(): Observable<any[]> {
		return this.http.get('/developers/console/domains').pipe(
			map((data: { mydomains: any[] }) => {
				if (data.mydomains) {
					return data.mydomains;
				}
				return [];
			})
		);
	}

	public addDamain(domain: any) {
		return this.http.post('/developers/console/domains/store', domain);
	}
	public removeDamain(domain: any): Observable<any> {
		return this.http.post('/developers/console/domains/destroy', {
			id: domain.id
		});
	}
	public verifyDamain(domain: any): Observable<any> {
		return this.http.post('/developers/console/domains/verify', {
			id: domain.id
		});
	}
	// apps

	public getMyApps(): Observable<any[]> {
		return this.http.get('/developers/console/my-apps').pipe(
			map((data: { web_apps: any[] }) => {
				if (data.web_apps) {
					return data.web_apps;
				}
				return [];
			})
		);
	}

	public getMyApp(id: string, page?: string): Observable<any> {
		return this.http.get(`/developers/console/my-app/${id}${page || ''}`).pipe(
			map((data: { web_app: any }) => {
				if (data.web_app) {
					return data.web_app;
				}
				return [];
			})
		);
	}
}
