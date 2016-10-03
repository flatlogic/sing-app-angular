import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule, DropdownModule, PaginationModule  } from 'ng2-bootstrap/ng2-bootstrap';
import { DataTableDirectives } from 'angular2-datatable/datatable';
import { Ng2TableModule } from 'ng2-table';

import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';

import { JqSparkline } from './sparkline/sparkline';

import { TablesBasic } from './basic/tables-basic.component';
import { TablesDynamic } from './dynamic/tables-dynamic.component';
import { SearchPipe } from './dynamic/pipes/search-pipe';

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
    AlertModule,
    TooltipModule,
    ButtonsModule,
    DropdownModule,
    PaginationModule,
    WidgetModule,
    UtilsModule,
    Ng2TableModule,
    RouterModule.forChild(routes)
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export default class UiElementsModule {
  static routes = routes;
}
