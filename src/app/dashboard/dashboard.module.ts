import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard.component.ts';
import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { GeoLocationsWidget } from './geo-locations-widget/geo-locations-widget.directive';

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    UtilsModule
  ],
  declarations: [
    Dashboard,
    GeoLocationsWidget
  ]
})
export default class DashboardModule {
  static routes = routes;
}
