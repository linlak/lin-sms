import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DeveloperService } from '../../../../shared/services/developer.service';
import { Tutorial } from '../../../../shared/models/tutorials';

@Injectable({
  providedIn: 'root'
})
export class AllTututoriasResolverService implements Resolve<Tutorial[]> {

  constructor(private dev: DeveloperService) { }
  resolve(): Observable<Tutorial[]> {
    return this.dev.getAllTutorials();
  }
}
