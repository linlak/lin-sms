import { Injectable } from '@angular/core';
import { ManageTutorialsService } from '../manage-tutorials.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Tutorial } from 'src/app/shared/models/tutorials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTutorialResolverService implements Resolve<Tutorial> {

constructor(private tutService: ManageTutorialsService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tutorial> {
  return this.tutService.getTutorialById(route.paramMap.get('id'));
}

}
