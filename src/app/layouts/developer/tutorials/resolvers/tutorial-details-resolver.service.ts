import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Tutorial } from 'src/app/shared/models/tutorials';
import { Observable, of } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialDetailsResolverService implements Resolve<Tutorial> {

  constructor(private dev: DeveloperService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tutorial> {
    return this.dev.getTutorialByLink(route.paramMap.get('title_link'));
  }
}
