import { NgModule }      from '@angular/core';

import { RickshawChart } from './rickshaw.directive';
import { D3Module } from "../d3/d3.module";

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
