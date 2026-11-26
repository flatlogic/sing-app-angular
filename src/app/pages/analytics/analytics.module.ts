import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { MainChartComponent } from './components/main-chart/main-chart.component';
import { BigStatComponent } from './components/big-stat/big-stat.component';

import { WidgetModule } from '../../layout/widget/widget.module';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TrendModule} from 'ngx-trend';
import {TaskContainerComponent} from './components/task-container/task-container.component';
import {TaskComponent} from './components/task/task';
import {CalendarModule} from '../visits/calendar/calendar.module';
import {AnalyticsService} from './analytics.service';
import {NewWidgetModule} from '../../layout/new-widget/widget.module';

export const routes: Routes = [
  { path: '', component: AnalyticsComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    ProgressbarModule,
    TrendModule,
    BsDropdownModule,
    CalendarModule,
    NewWidgetModule
  ],
  declarations: [
    AnalyticsComponent,
    MainChartComponent,
    BigStatComponent,
    TaskContainerComponent,
    TaskComponent
  ],
  providers: [
    AnalyticsService
  ]
})
export class AnalyticsModule {
  static routes = routes;
}
