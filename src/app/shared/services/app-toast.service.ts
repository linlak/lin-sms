import { Injectable } from '@angular/core';
import { Alert } from '../models/alerts';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { IClipboardResponse, ClipboardService } from 'ngx-clipboard';

@Injectable({
	providedIn: 'root'
})
export class AppToastService {
	toasts: any[] = [];
	private alertAdded: BehaviorSubject<Alert> = new BehaviorSubject<Alert>(null);

	show(toast: { header?: string; msg: string; type?: string }) {
		this.toasts.push(toast);
	}
	alertlistener(): Observable<Alert> {
		return this.alertAdded.asObservable().pipe(share());
	}
	showAlart(alert: Alert) {
		this.alertAdded.next(alert);
	}
	remove(toast) {
		this.toasts = this.toasts.filter(t => t !== toast);
	}
	constructor(private clipService: ClipboardService) {
		this.clipService.copyResponse$.subscribe((response: IClipboardResponse) => {
			if (response.isSuccess) {
				this.show({
					// header: 'Clipboad',
					msg: 'Item copied successfully',
					type: 'success'
				});
			}
		});
	}
}
