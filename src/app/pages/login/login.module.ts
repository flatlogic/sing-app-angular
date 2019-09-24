import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import {NewWidgetModule} from '../../layout/new-widget/widget.module';
import {AlertModule} from 'ngx-bootstrap';
import {OidcSecurityService} from 'angular-auth-oidc-client';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewWidgetModule,
    AlertModule.forRoot()
  ],
  providers: [
    OidcSecurityService
  ]
})
export class LoginModule {
  static routes = routes;
}
