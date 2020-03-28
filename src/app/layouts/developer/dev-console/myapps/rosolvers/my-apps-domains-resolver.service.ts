import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DeveloperService } from 'src/app/shared/services/developer.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAppsDomainsResolverService implements Resolve<any> {

  constructor(private dev: DeveloperService) { }

  resolve(): Observable<any> {
    return this.dev.getMyDomains();
  }
}
