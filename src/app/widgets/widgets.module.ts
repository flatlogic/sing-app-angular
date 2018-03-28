import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import 'jQuery-Mapael/js/jquery.mapael.js';
import 'jQuery-Mapael/js/maps/world_countries.js';

import { WidgetsComponent } from './widgets.component';
import { LiveTileModule } from '../components/tile/tile.module';
import { SkyconsModule } from '../components/skycon/skycon.module';
import { WidgetModule } from '../layout/widget/widget.module';
import { FlotChartModule } from '../components/flot/flot.module';
import { RickshawChartModule } from '../components/rickshaw/rickshaw.module';
import { JqSparklineModule } from '../components/sparkline/sparkline.module';
import { MapaelLayersMapModule } from '../components/mapael/mapael.module';
import { ChangesChartWidgetComponent } from './changes-chart-widget/changes-chart-widget.component';
import { FlotChartWidgetComponent } from './flot-chart-widget/flot-chart-widget.component';
import { NasdaqSparklineWidgetComponent } from './nasdaq-sparkline-widget/nasdaq-sparkline-widget.component';
import { RealtimeTrafficWidgetComponent } from './realtime-traffic-widget/realtime-traffic-widget.component';
import { YearsMapWidgetComponent } from './years-map-widget/years-map-widget.component';
import { FakeWorldData } from './years-map-widget/fake-world-data.service';

export const routes = [
  {path: '', component: WidgetsComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    WidgetsComponent,
    ChangesChartWidgetComponent,
    FlotChartWidgetComponent,
    NasdaqSparklineWidgetComponent,
    RealtimeTrafficWidgetComponent,
    YearsMapWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LiveTileModule,
    SkyconsModule,
    WidgetModule,
    FlotChartModule,
    RickshawChartModule,
    JqSparklineModule,
    MapaelLayersMapModule
  ],
  providers: [FakeWorldData]
})
export class WidgetsModule {
  static routes = routes;
}
