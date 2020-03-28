import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppToastService } from '../shared/services/app-toast.service';
import { Alert } from '../shared/models/alerts';
import { TokenService } from '../shared/services/token.service';
import { AccessToken } from '../shared/models/tokens';

@Injectable({
    providedIn: 'root'
})
export class ApiInterceptor {
    constructor(
        private toastr: AppToastService,
        private tokenService: TokenService
        ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return new Observable(observer => {
            let newReq = req.clone();
            if (this.tokenService.hasToken()) {

                newReq = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + this.tokenService.getToken().accessToken)
                });
                // newReq.headers.;

                // console.log(newReq.headers.get('Authorization'));
            }
            const subscription = next.handle(newReq).subscribe((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const body: any = event.clone().body;
                    if (body.msg) {
                        this.toastr.showAlart(body.msg as Alert);
                    }
                    if (body.toast) {
                        this.toastr.show(body.toast);
                    }
                    if (body.accessToken) {
                        this.tokenService.setToken(body.accessToken as AccessToken);
                    }
                    if (body.accessStatus) {
                        this.tokenService.remove();
                    }
                    if (body.no_data) {
                        observer.error();
                        return;
                    }
                    observer.next(event);
                }
            }, (err: any) => {
                // this.removRequest(req);
                if (err.status === 401) {
                    // this.auth.collectFaileRequest(newReq);
                }
                observer.error(err);
            },
                () => {
                    // this.removRequest(newReq);
                    observer.complete();
                });

            return () => {
                // this.removRequest(newReq);
                subscription.unsubscribe();
            };
        });
    }
}
