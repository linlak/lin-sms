import { Injectable } from '@angular/core';
import { DeveloperService } from 'src/app/shared/services/developer.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAppsResolverService implements Resolve<any> {

  constructor(private dev: DeveloperService) { }

  resolve(): Observable<any[]> {
    return this.dev.getMyApps();
  }
}
