import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// libs
import 'markdown';
import 'bootstrap-markdown/js/bootstrap-markdown.js';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'parsleyjs';

import { TooltipModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Autosize } from 'angular2-autosize';
import { WidgetModule } from '../layout/widget/widget.module';

import { Elements } from './elements/elements.component';
import { Validation } from './validation/validation.component';

export const routes = [
  {path: '', redirectTo: 'elements', pathMatch: 'full'},
  {path: 'elements', component: Elements},
  {path: 'validation', component: Validation}
];

@NgModule({
  declarations: [
    Autosize,
    Elements,
    Validation
  ],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    AlertModule,
    WidgetModule,
    RouterModule.forChild(routes),
  ]
})
export default class FormModule {
  static routes = routes;
}
