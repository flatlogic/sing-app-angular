import { NgModule }      from '@angular/core';
import { LiveTile } from './tile.directive';

import 'metrojs/release/MetroJs.Full/MetroJs';

@NgModule({
  declarations: [
    LiveTile
  ],
  exports: [
    LiveTile
  ]
})
export class LiveTileModule {
}
