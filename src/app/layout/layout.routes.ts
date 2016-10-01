import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module') },
    { path: 'profile', loadChildren: () => System.import('../profile/profile.module') },
    { path: 'forms', loadChildren: () => System.import('../forms/forms.module') },
    { path: 'ui-elements', loadChildren: () => System.import('../ui-elements/ui-elements.module') }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
