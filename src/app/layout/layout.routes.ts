import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module') },
    { path: 'profile', loadChildren: () => System.import('../profile/profile.module') },
    { path: 'forms', loadChildren: () => System.import('../forms/forms.module') },
    { path: 'ui-elements', loadChildren: () => System.import('../ui-elements/ui-elements.module') },
    { path: 'extra', loadChildren: () => System.import('../extra/extra.module') },
    { path: 'tables', loadChildren: () => System.import('../tables/tables.module') },
    { path: 'maps', loadChildren: () => System.import('../maps/maps.module') },
    { path: 'grid', loadChildren: () => System.import('../grid/grid.module') },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
