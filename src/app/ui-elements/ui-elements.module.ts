import 'messenger/build/js/messenger.js';
import 'jquery-ui/ui/sortable.js';
import 'jquery.nestable/jquery.nestable.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';

import { Components } from './components/components.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { ModalComponent } from './components/modal-window/modal.component';
import { Buttons } from './buttons/buttons.component';
import { Notifications } from './notifications/notifications.component';
import { Icons } from './icons/icons.component';
import { TabsAccordion } from './tabs-accordion/tabs-accordion.component';
import { ListGroups } from './list-groups/list-groups.component';

import { MessengerDemo } from './notifications/messenger/messenger.directive';

export const routes = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'components', component: Components},
  {path: 'buttons', component: Buttons},
  {path: 'notifications', component: Notifications},
  {path: 'icons', component: Icons},
  {path: 'tabs-accordion', component: TabsAccordion},
  {path: 'list-groups', component: ListGroups},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Components,
    Buttons,
    ModalComponent,
    Notifications,
    MessengerDemo,
    Icons,
    TabsAccordion,
    ListGroups
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
    DropdownModule,
    TabsModule,
    AccordionModule
  ]
})
export default class UiElementsModule {
  static routes = routes;
}
