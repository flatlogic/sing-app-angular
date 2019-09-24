import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimateNumberDirective } from './directives/animate-number.directive';
import { CheckAllDirective } from './directives/check-all.directive';
import { ProgressAnimateDirective } from './directives/progress-animate.directive';

@NgModule({
  declarations: [
    AnimateNumberDirective,
    CheckAllDirective,
    ProgressAnimateDirective
  ],
  exports: [
    AnimateNumberDirective,
    CheckAllDirective,
    ProgressAnimateDirective
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule {
}
