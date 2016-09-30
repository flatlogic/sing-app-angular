import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule, ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap'
import { ModalModule } from 'ng2-modal'

import {Components} from './components/components.component'
import {WidgetModule} from '../layout/widget/widget.module';
import {ModalComponent} from './components/modal-window/modal.component';
import {Buttons} from './buttons/buttons.component';

export const routes = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'components', component: Components},
  {path: 'buttons', component: Buttons},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Components,
    Buttons,
    ModalComponent
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
    DropdownModule
  ]
})
export default class UiElementsModule {
  static routes = routes;
}
