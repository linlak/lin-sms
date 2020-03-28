import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MyAppServiceService } from '../my-app-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppEditResolverService implements Resolve<any> {

  constructor(private myApp: MyAppServiceService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.myApp.getMyAppByIdString(route.paramMap.get('id'), '/edit');
  }
}
