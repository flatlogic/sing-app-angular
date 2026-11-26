import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { WidgetModule } from '../../layout/widget/widget.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DropzoneDemoDirective } from '../../components/dropzone/dropzone.directive';
/* tslint:enable */
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';

export const routes: Routes = [
  {path: '', redirectTo: 'elements', pathMatch: 'full'},
  {path: 'elements', component: ElementsComponent},
  {path: 'validation', component: ValidationComponent},
  // {path: 'wizard', component: WizardComponent}
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideNgxMask()],
  declarations: [
    ElementsComponent,
    ValidationComponent,
    DropzoneDemoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective,
    TooltipModule,
    AlertModule,
    BsDropdownModule,
    WidgetModule,
    RouterModule.forChild(routes),
  ]
})
export class FormModule {
  static routes = routes;
}
