import { NgModule }      from '@angular/core';

import { D3Module } from '../d3/d3.module';

import 'rickshaw';

import { RickshawChart } from './rickshaw.directive';

@NgModule({
  imports: [
    D3Module
  ],
  declarations: [
    RickshawChart
  ],
  exports: [
    RickshawChart
  ]
})
export class RickshawChartModule {
}
