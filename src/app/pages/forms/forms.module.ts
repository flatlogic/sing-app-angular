import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TooltipModule, AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { Autosize } from 'ng-autosize';
import { NgSelect2Module } from 'ng-select2';
import { WidgetModule } from '../../layout/widget/widget.module';
import { NgxMaskModule } from 'ngx-mask'
/* tslint:disable */
import { BootstrapWizardModule } from '../../components/wizard/wizard.module';
import { BootstrapApplicationWizardComponent } from './wizard/bootstrap-application-wizard/bootstrap-application-wizard.component';
import { DropzoneDemoDirective } from '../../components/dropzone/dropzone.directive';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
/* tslint:enable */
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorModule } from '@tinymce/tinymce-angular';

export const routes = [
  {path: '', redirectTo: 'elements', pathMatch: 'full'},
  {path: 'elements', component: ElementsComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'wizard', component: WizardComponent}
];

@NgModule({
  declarations: [
    Autosize,
    ElementsComponent,
    ValidationComponent,
    BootstrapApplicationWizardComponent,
    WizardComponent,
    DropzoneDemoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    WidgetModule,
    BootstrapWizardModule,
    NKDatetimeModule,
    NgSelect2Module,
    RouterModule.forChild(routes),
    EditorModule
  ]
})
export class FormModule {
  static routes = routes;
}
