import 'messenger/build/js/messenger.js';
import 'jquery.nestable/jquery.nestable.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule, TooltipModule } from 'ngx-bootstrap';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule, AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { ComponentsComponent } from './components/components.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { IconsComponent } from './icons/icons.component';
import { TabsAccordionComponent } from './tabs-accordion/tabs-accordion.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { MessengerDemoDirective } from './notifications/messenger/messenger.directive';

export const routes = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'components', component: ComponentsComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'tabs-accordion', component: TabsAccordionComponent},
  {path: 'list-groups', component: ListGroupsComponent},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ComponentsComponent,
    ButtonsComponent,
    NotificationsComponent,
    MessengerDemoDirective,
    IconsComponent,
    TabsAccordionComponent,
    ListGroupsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    WidgetModule,
    TooltipModule.forRoot(),
    ModalModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot()
  ]
})
export class UiElementsModule {
  static routes = routes;
}
