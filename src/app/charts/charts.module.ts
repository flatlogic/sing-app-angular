import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import 'webpack-raphael';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

import { WidgetModule } from '../layout/widget/widget.module';
import { FlotChartModule } from '../components/flot/flot.module';
import { MorrisChartModule } from '../components/morris/morris.module';
import { Nvd3ChartModule } from '../components/nvd3/nvd3.module';
import { JqSparklineModule } from '../components/sparkline/sparkline.module';
import { RickshawChartModule } from '../components/rickshaw/rickshaw.module';
import { FlotChartAnimator } from './flot-chart-animator/flot-chart-animator.directive';

import { Charts } from './charts.component';

export const routes = [
  { path: '', component: Charts, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FlotChartModule,
    MorrisChartModule,
    Nvd3ChartModule,
    JqSparklineModule,
    RickshawChartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Charts,
    FlotChartAnimator
  ]
})
export class ChartsModule {
  static routes = routes;
}
