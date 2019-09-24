import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthCallbackComponent} from './auth-callback.component';
import {RouterModule} from '@angular/router';
import {LoginService} from '../login/login.service';
import {LoaderModule} from '../../components/loader/loader.module';

export const routes = [
  { path: '', component: AuthCallbackComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [AuthCallbackComponent],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    LoginService
  ]
})
export class AuthCallbackModule { }
