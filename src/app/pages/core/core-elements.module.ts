import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AlertModule} from 'ngx-bootstrap/alert';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ModalModule} from 'ngx-bootstrap/modal';
import { WidgetModule } from '../../layout/widget/widget.module';
import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
import { GridComponent } from './grid/grid.component';

export const routes: Routes = [
  {path: '', redirectTo: 'typography', pathMatch: 'full'},
  {path: 'typography', component: TypographyComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'grid', component: GridComponent},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    TypographyComponent,
    ColorsComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule,
    WidgetModule,
    TooltipModule,
    ModalModule,
    ButtonsModule,
    BsDropdownModule,
    TabsModule,
    AccordionModule
  ]
})
export class CoreElementsModule {
  static routes = routes;
}
