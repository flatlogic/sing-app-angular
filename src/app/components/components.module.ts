import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RickshawChart } from './directives/rickshaw/rickshaw.directive';
import { JqSparkline } from './directives/sparkline/sparkline.directive';
import { FlotChart } from './directives/flot/flot.directive';
import { MorrisChart } from './directives/morris/morris.directive';
import { Nvd3Chart } from './directives/nvd3/nvd3.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RickshawChart,
    JqSparkline,
    FlotChart,
    MorrisChart,
    Nvd3Chart
  ],
  exports: [
    RickshawChart,
    JqSparkline,
    FlotChart,
    MorrisChart,
    Nvd3Chart
  ]
})
export class ComponentsModule {
}
