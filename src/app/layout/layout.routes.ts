import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
    { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxModule' },
    { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
    { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
    { path: 'ecommerce', loadChildren: '../ecommerce/ecommerce.module#EcommerceModule' },
    { path: 'forms', loadChildren: '../forms/forms.module#FormModule' },
    { path: 'ui', loadChildren: '../ui-elements/ui-elements.module#UiElementsModule' },
    { path: 'extra', loadChildren: '../extra/extra.module#ExtraModule' },
    { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
    { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
    { path: 'grid', loadChildren: '../grid/grid.module#GridModule' },
    { path: 'widgets', loadChildren: '../widgets/widgets.module#WidgetsModule' },
    { path: 'package', loadChildren: '../package/package.module#PackageModule' },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
