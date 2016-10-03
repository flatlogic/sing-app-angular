import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimateNumber } from './directives/animate-number.directive.ts';
import { CheckAll } from './directives/check-all.directive';
import { ProgressAnimate } from './directives/progress-animate.directive';

@NgModule({
  declarations: [
    AnimateNumber,
    CheckAll,
    ProgressAnimate
  ],
  exports: [
    AnimateNumber,
    CheckAll,
    ProgressAnimate
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule {
}
