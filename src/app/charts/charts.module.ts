import 'webpack-raphael';
import 'morris.js/morris.js';
import 'easy-pie-chart/dist/jquery.easypiechart.js';
import 'jquery-flot/jquery.flot.js';
import 'jquery-flot/jquery.flot.selection.js';
import 'jquery-flot/jquery.flot.time.js';
import 'jquery.flot.animator/jquery.flot.animator.js';
import 'flot-orderBars/js/jquery.flot.orderBars.js';
import 'jquery.sparkline/jquery.sparkline.min';

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import {FlotChartAnimator} from './flot-chart-animator/flot-chart-animator';
import {FlotChart} from './components/flot/flot';
import {MorrisChart} from './components/morris/morris';
import {JqSparkline} from './components/sparkline/sparkline';
import {Nvd3Chart} from './components/nvd3/nvd3';

import { RouterModule } from '@angular/router';
import { Charts } from './charts.component';

export const routes = [
  { path: '', component: Charts, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [
    FlotChartAnimator,
    FlotChart,
    MorrisChart,
    JqSparkline,
    Nvd3Chart,
    
    Charts
  ]
})
export default class ChartsModule {
  static routes = routes;
}
