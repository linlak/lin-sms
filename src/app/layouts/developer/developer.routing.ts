import { Routes, RouterModule } from '@angular/router';
import { DeveloperComponent } from './developer.component';
import { DeveloperHomeComponent } from './developer-home/developer-home.component';
import { ModuleWithProviders } from '@angular/core';

 const devRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'tutorials',
                loadChildren: () => import('./tutorials/tutorials.module').then(mod => mod.TutorialsModule)
            },
            {
                path: 'console',
                loadChildren: () => import('./dev-console/dev-console.module').then(mod => mod.DevConsoleModule)
            },
            {
                path: '',
                component: DeveloperHomeComponent,
            },
            {
                path: '**',
                redirectTo: '/developer',
                pathMatch: 'full'
            }
        ],
        component: DeveloperComponent
    }
];


export const DevRouting: ModuleWithProviders = RouterModule.forChild(devRoutes);
