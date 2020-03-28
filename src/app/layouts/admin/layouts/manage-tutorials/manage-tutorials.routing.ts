import { Routes, RouterModule } from '@angular/router';
import { ManageTutorialListComponent } from './manage-tutorial-list/manage-tutorial-list.component';
import { ManageTutorialsListResolverService } from './resolvers/manage-tutorials-list-resolver.service';
import { ManageTutorialCreateComponent } from './manage-tutorial-create/manage-tutorial-create.component';
import { ManageTutorialEditComponent } from './manage-tutorial-edit/manage-tutorial-edit.component';
import { ManageTutorialResolverService } from './resolvers/manage-tutorial-resolver.service';
import { ModuleWithProviders } from '@angular/core';

const manageTutsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'create',
                component: ManageTutorialCreateComponent
            },
            {
                path: 'edit/:id',
                children: [
                    {
                        path: '',
                        children: [
                            {
                                path: '',
                                component: ManageTutorialEditComponent,
                                resolve: {
                                    tutorial: ManageTutorialResolverService
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: '',
                component: ManageTutorialListComponent,
                resolve: {
                    tutorials: ManageTutorialsListResolverService
                }
            }
        ]
    }
];

export const ManageTutsRouting: ModuleWithProviders = RouterModule.forChild(manageTutsRoutes);
