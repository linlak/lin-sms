import { Routes, RouterModule } from '@angular/router';
import { InspirationComponent } from './inspiration.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DatingTipsComponent } from './dating-tips/dating-tips.component';
import { DatingTipComponent } from './dating-tip/dating-tip.component';
import { ModuleWithProviders } from '@angular/core';

 const inspireRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: InspirationComponent
            },
            {
                path: 'quotes',
                component: QuotesComponent
            },
            {
                path: 'dating',
                children: [
                    {
                        path: '',
                        component: DatingTipsComponent
                    },
                    {
                        path: '{id}',
                        component: DatingTipComponent
                    }
                ]
            }
        ]
    }
];

export const InspireRouting: ModuleWithProviders = RouterModule.forChild(inspireRoutes);
