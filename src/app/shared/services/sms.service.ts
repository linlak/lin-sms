import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Price, PriceValue } from '../models/prices';
import { SmsCal } from '../models/sms';

@Injectable({
	providedIn: 'root'
})
export class SmsService {
	constructor(private http: HttpClient) {}

	public getPayMthds(): Observable<any> {
		return this.http.get('api/main/contacts').pipe(
			map((data: { contacts: any }) => {
				if (data.contacts) {
					return data.contacts;
				}
				return;
			})
		);
	}
	public getCal(): Observable<SmsCal> {
		return this.http.get('/api/sms/cal').pipe(
			map((data: { cal: SmsCal }) => {
				if (data.cal) {
					return data.cal;
				}
				return {} as SmsCal;
			})
		);
	}
	public getPriceValues(): Observable<PriceValue> {
		return this.http.get('/api/sms/buy').pipe(
			map((data: { values: PriceValue }) => {
				if (data.values) {
					return data.values;
				}
				return {} as PriceValue;
			})
		);
	}
	public getPrices(): Observable<Price[]> {
		return this.http.get('/api/sms/prices').pipe(
			map((data: { priceList: Price[] }) => {
				if (data.priceList) {
					return data.priceList;
				}
				return [];
			})
		);
	}
	public getMyPayments(): Observable<any[]> {
		return this.http.get(`api/sms/payments`).pipe(
			map((data: { payments: any[] }) => {
				if (data.payments) {
					return data.payments;
				}
				return [];
			})
		);
	}
	public getSentSMS(): Observable<any[]> {
		return this.http.get('api/sms/sent').pipe(
			map((data: { sms: any[] }) => {
				if (data.sms) {
					return data.sms;
				}
				return [];
			})
		);
	}
	public getSentSMSEnt(id: string | number): Observable<any> {
		return this.http.get(`api/sms/sent-single/${id}`).pipe(
			map((data: { msgs: any }) => {
				if (data.msgs) {
					return data.msgs;
				}
			})
		);
	}
	public getMyPayment(id: string): Observable<any> {
		return this.http.get(`api/sms/payment/${id}`).pipe(
			map((data: { payment: any }) => {
				if (data.payment) {
					return data.payment;
				}
			})
		);
	}

	public getMyPhonebooks(): Observable<any[]> {
		return this.http.get(`api/sms/phonebook`).pipe(
			map((data: { groups: any[] }) => {
				if (data.groups) {
					return data.groups;
				}
				return [];
			})
		);
	}

	public getMyPhonebookSingle(id: number | string): Observable<any> {
		return this.http.get(`api/sms/phonebook-single/${id}`).pipe(
			map((data: { group: any }) => {
				if (data.group) {
					return data.group;
				}
			})
		);
	}
}
