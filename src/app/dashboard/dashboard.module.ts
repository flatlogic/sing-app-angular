import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';

import 'jquery.animate-number/jquery.animateNumber.js';
import 'jquery-mousewheel/jquery.mousewheel.js';
import 'jquery-mapael/js/jquery.mapael.js';
import 'jquery-mapael/js/maps/usa_states';
import 'jquery-mapael/js/jquery.mapael.js';
import 'bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar.js';

import { Dashboard } from './dashboard.component.ts';
import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { GeoLocationsWidget } from './geo-locations-widget/geo-locations-widget.directive';
import { BootstrapCalendar } from './bootstrap-calendar/bootstrap-calendar.component';

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
    GeoLocationsWidget,
    BootstrapCalendar
  ]
})
export default class DashboardModule {
  static routes = routes;
}
