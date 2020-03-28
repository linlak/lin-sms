import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { ModuleWithProviders } from '@angular/core';

 const jobsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'apply/{id}',
                component: JobApplyComponent,
            },
            {
                path: 'view/{titlelink}',
                component: JobDetailsComponent,
            },
            {
                path: 'create',
                component: JobCreateComponent,
            },
            {
                path: 'edit/{id}',
                component: JobEditComponent,
            },
            {
                path: 'recent',
                component: JobsListComponent,
            },
            {
                path: '',
                component: JobsListComponent,
            }
        ],
        component: JobsComponent
    }
];

export const JobsRouting: ModuleWithProviders = RouterModule.forChild(jobsRoutes);
