import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import 'jquery.animate-number/jquery.animateNumber.js';
import 'jQuery-Mapael/js/jquery.mapael.js';
import 'jQuery-Mapael/js/maps/usa_states';
import 'bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar.js';

import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { RickshawChartModule } from '../components/rickshaw/rickshaw.module';
import { GeoLocationsWidgetDirective } from './geo-locations-widget/geo-locations-widget.directive';
import { MarketStatsWidgetComponent } from './market-stats-widget/market-stats-widget.component';
import { BootstrapCalendarDirective } from './bootstrap-calendar/bootstrap-calendar.component';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    UtilsModule,
    RickshawChartModule
  ],
  declarations: [
    DashboardComponent,
    GeoLocationsWidgetDirective,
    BootstrapCalendarDirective,
    MarketStatsWidgetComponent
  ]
})
export class DashboardModule {
  static routes = routes;
}
