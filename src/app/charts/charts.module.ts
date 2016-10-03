import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';

import { Charts } from './charts.component';

import 'jquery-flot';
import 'jquery.flot.animator/jquery.flot.animator';
import 'jquery-flot/jquery.flot.time.js';
import 'jquery-sparkline';
import 'webpack-raphael';
import 'morris.js/morris.js';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

export const routes = [
  { path: '', component: Charts, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Charts
  ]
})
export default class ChartsModule {
  static routes = routes;
}
