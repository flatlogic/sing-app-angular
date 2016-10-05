import { NgModule }      from '@angular/core';
import { Skycon } from './scycon.directive';

@NgModule({
  declarations: [
    Skycon
  ],
  exports: [
    Skycon
  ]
})
export class SkyconsModule {
}
