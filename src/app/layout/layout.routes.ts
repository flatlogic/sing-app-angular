import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    { path: 'analytics', loadChildren: () => import('../pages/analytics/analytics.module').then(m => m.AnalyticsModule) },
    { path: 'visits', loadChildren: () => import('../pages/visits/visits.module').then(m => m.VisitsModule) },
    { path: 'inbox', loadChildren: () => import('../pages/inbox/inbox.module').then(m => m.InboxModule) },
    { path: 'charts', loadChildren: () => import('../pages/charts/charts.module').then(m => m.ChartsModule) },
    { path: 'profile', loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfileModule) },
    { path: 'ecommerce', loadChildren: () => import('../pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    { path: 'core', loadChildren: () => import('../pages/core/core-elements.module').then(m => m.CoreElementsModule) },
    { path: 'forms', loadChildren: () => import('../pages/forms/forms.module').then(m => m.FormModule) },
    { path: 'ui', loadChildren: () => import('../pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule) },
    { path: 'extra', loadChildren: () => import('../pages/extra/extra.module').then(m => m.ExtraModule) },
    { path: 'tables', loadChildren: () => import('../pages/tables/tables.module').then(m => m.TablesModule) },
    { path: 'maps', loadChildren: () => import('../pages/maps/maps.module').then(m => m.MapsModule) },
    { path: 'grid', loadChildren: () => import('../pages/grid/grid.module').then(m => m.GridModule) },
    { path: 'widgets', loadChildren: () => import('../pages/widgets/widgets.module').then(m => m.WidgetsModule) },
    { path: 'package', loadChildren: () => import('../pages/package/package.module').then(m => m.PackageModule) },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
