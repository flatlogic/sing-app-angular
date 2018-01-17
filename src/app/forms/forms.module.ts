import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


declare let global: any;
// libs
/* tslint:disable */
let markdown = require('markdown').markdown;
/* tslint:enable */
global.markdown = markdown;
import 'bootstrap-markdown/js/bootstrap-markdown.js';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'parsleyjs';
import 'bootstrap-application-wizard/src/bootstrap-wizard.js';
import 'twitter-bootstrap-wizard/jquery.bootstrap.wizard.js';
import 'jasny-bootstrap/docs/assets/js/vendor/holder.js';
import 'jasny-bootstrap/js/fileinput.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap-timepicker/js/bootstrap-timepicker.min.js';
import 'bootstrap-colorpicker';
import 'bootstrap-slider/dist/bootstrap-slider.js';
import 'jasny-bootstrap/docs/assets/js/vendor/holder.js';
import 'jasny-bootstrap/js/fileinput.js';
import 'jasny-bootstrap/js/inputmask.js';

import  'tinymce/themes/modern/theme.js';
import  'tinymce/plugins/link/plugin.js';
import  'tinymce/plugins/paste/plugin.js';
import  'tinymce/plugins/table/plugin.js';

import { TooltipModule, AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { Autosize } from 'ng-autosize';
import { Select2Module } from 'ng2-select2';
import { WidgetModule } from '../layout/widget/widget.module';
import { TextMaskModule } from 'angular2-text-mask';
/* tslint:disable */
import { BootstrapWizardModule } from '../components/wizard/wizard.module';
import { BootstrapApplicationWizard } from './wizard/bootstrap-application-wizard/bootstrap-application-wizard.component';
import { DropzoneDemo } from '../components/dropzone/dropzone.directive';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
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
    BootstrapApplicationWizard,
    Wizard,
    DropzoneDemo
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    WidgetModule,
    BootstrapWizardModule,
    NKDatetimeModule,
    Select2Module,
    RouterModule.forChild(routes),
  ]
})
export class FormModule {
  static routes = routes;
}
