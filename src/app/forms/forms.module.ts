import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


declare var global: any;
// libs
var markdown = require('markdown').markdown;
global.markdown = markdown;
import 'bootstrap-markdown/js/bootstrap-markdown.js';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'parsleyjs';
import 'bootstrap-application-wizard/src/bootstrap-wizard.js';
import 'twitter-bootstrap-wizard/jquery.bootstrap.wizard.js';
// import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js';
// import 'ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js';

import { TooltipModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Autosize } from 'angular2-autosize';
import { WidgetModule } from '../layout/widget/widget.module';
/* tslint:disable */
import { BootstrapWizardModule } from '../components/wizard/wizard.module';
import { BootstrapApplicationWizard } from './wizard/bootstrap-application-wizard/bootstrap-application-wizard.directive';
// import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
/* tslint:enable */
import { Elements } from './elements/elements.component';
import { Validation } from './validation/validation.component';
import { Wizard } from './wizard/wizard.component';

export const routes = [
  {path: '', redirectTo: 'elements', pathMatch: 'full'},
  {path: 'elements', component: Elements},
  {path: 'validation', component: Validation},
  {path: 'wizard', component: Wizard}
];

@NgModule({
  declarations: [
    Autosize,
    Elements,
    Validation,
    // NKDatetime,
    BootstrapApplicationWizard,
    Wizard
  ],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    AlertModule,
    WidgetModule,
    BootstrapWizardModule,
    // NKDatetime,
    // NKDatetimeModule,
    RouterModule.forChild(routes),
  ]
})
export default class FormModule {
  static routes = routes;
}
