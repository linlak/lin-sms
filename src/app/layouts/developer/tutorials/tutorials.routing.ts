import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { AllTututoriasResolverService } from './resolvers/all-tututorias-resolver.service';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsComponent } from './tutorials.component';
import { TutorialDetailsResolverService } from './resolvers/tutorial-details-resolver.service';
import { ModuleWithProviders } from '@angular/core';

 const devTuts: Routes = [
    {
        path: '',
        component: TutorialsComponent,
        children: [
            {
                path: '',
                component: TutorialsListComponent,
                resolve: {
                    tutorials: AllTututoriasResolverService
                }
            },
            {
                path: 'details/:title_link',
                component: TutorialDetailsComponent,
                resolve: {
                    tutorial: TutorialDetailsResolverService
                }
            },
            {
                path: '**',
                redirectTo: '/developer/tutorials',
                pathMatch: 'full'
            },
        ]
    }
];

export const DevTutsRouting: ModuleWithProviders = RouterModule.forChild(devTuts);
