import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import 'jquery.animate-number/jquery.animateNumber.js';
import 'jQuery-Mapael/js/jquery.mapael.js';
import 'jQuery-Mapael/js/maps/usa_states';

import { VisitsComponent } from './visits.component';
import { WidgetModule } from '../../layout/widget/widget.module';
import { UtilsModule } from '../../layout/utils/utils.module';
import { RickshawChartModule } from '../../components/rickshaw/rickshaw.module';
import { GeoLocationsWidgetDirective } from './geo-locations-widget/geo-locations-widget.directive';
import { MarketStatsWidgetComponent } from './market-stats-widget/market-stats-widget.component';
import {CalendarModule} from './calendar/calendar.module';

export const routes = [
  { path: '', component: VisitsComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    UtilsModule,
    RickshawChartModule,
    CalendarModule
  ],
  declarations: [
    VisitsComponent,
    GeoLocationsWidgetDirective,
    MarketStatsWidgetComponent
  ]
})
export class VisitsModule {
  static routes = routes;
}
