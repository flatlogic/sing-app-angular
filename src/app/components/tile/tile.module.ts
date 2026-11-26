import { NgModule } from '@angular/core';
import { LiveTileDirective } from './tile.directive';


@NgModule({
  declarations: [
    LiveTileDirective
  ],
  exports: [
    LiveTileDirective
  ]
})
export class LiveTileModule {
}
