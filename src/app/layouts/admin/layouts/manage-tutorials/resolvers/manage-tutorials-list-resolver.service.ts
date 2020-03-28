import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageTutorialsService } from '../manage-tutorials.service';
import { Tutorial } from 'src/app/shared/models/tutorials';

@Injectable({
  providedIn: 'root'
})
export class ManageTutorialsListResolverService implements Resolve<Tutorial[]> {

constructor(private tutService: ManageTutorialsService) { }

  resolve(): Observable<Tutorial[]> {
  return this.tutService.getAllTutorials();
}
}
