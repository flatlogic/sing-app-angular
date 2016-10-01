import 'jquery.sparkline/jquery.sparkline.min.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { AlertModule, TooltipModule, ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import {JqSparkline} from './sparkline/sparkline';
import {DataTableDirectives} from 'angular2-datatable/datatable';

import { TablesBasic } from './basic/tables-basic.component';
import { TablesDynamic } from './dynamic/tables-dynamic.component';
import {SearchPipe} from './dynamic/pipes/search-pipe';

export const routes = [
  {path: '', redirectTo: 'basic', pathMatch: 'full'},
  {path: 'basic', component: TablesBasic},
  {path: 'dynamic', component: TablesDynamic},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    JqSparkline,
    DataTableDirectives,
    TablesBasic,
    TablesDynamic,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule,
    TooltipModule,
    ButtonsModule,
    DropdownModule,
    WidgetModule,
    UtilsModule
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export default class UiElementsModule {
  static routes = routes;
}
