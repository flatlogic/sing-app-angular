import 'jQuery-Mapael/js/jquery.mapael.js';
import 'jQuery-Mapael/js/maps/world_countries.js';

import { NgModule }      from '@angular/core';
import { MapaelLayersMap } from './mapael.directive';

@NgModule({
  declarations: [
    MapaelLayersMap
  ],
  exports: [
    MapaelLayersMap
  ]
})
export class MapaelLayersMapModule {
}
