import { Injectable } from '@angular/core';
import { AdminNav } from '../../adminnavmodel';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AdminService {
	public static adminUrl = 'api/administration';
	public static adminValUrl = `${AdminService.adminUrl}/val`;

	private readonly defaultNav: AdminNav[] = [
		{
			title: 'Home',
			uri: ['./'],
			params: []
		},
		{
			title: 'Users',
			uri: ['./users']
		},
		{
			title: 'SMS',
			dropId: 'adminSMS',
			dropNav: [
				{
					title: 'Sent',
					uri: ['./sms']
				},
				{
					title: 'Pending',
					uri: ['./sms/pending']
				},
				{
					title: 'Failed',
					uri: ['./sms/failed']
				}
			]
		},
		{
			title: 'Payments',
			dropId: 'adminPay',
			dropNav: [
				{
					title: 'All',
					uri: ['./sms/payments']
				},
				{
					title: 'Pending',
					uri: ['./sms/payments', 'pending']
				},
				{
					title: 'Verified',
					uri: ['./sms/payments', 'verified']
				},
				{
					title: 'Actived',
					uri: ['./sms/payments', 'active']
				},
				{
					title: 'Depleted',
					uri: ['./sms/payments', 'depleted']
				}
			]
		},
		{
			title: 'Tutorials',
			uri: ['./tutorials']
		}
	];

	private navChange: BehaviorSubject<AdminNav[]> = new BehaviorSubject<
		AdminNav[]
	>(this.defaultNav);
	constructor() {}

	getDefaultNav(): AdminNav[] {
		return [...this.defaultNav];
	}
	public navChangeListener(): Observable<AdminNav[]> {
		return this.navChange.asObservable().pipe(share());
	}
	public changeNav(nav: AdminNav[]): void {
		this.navChange.next(nav);
	}

	public resetNav(): void {
		this.navChange.next(this.getDefaultNav());
	}
}
