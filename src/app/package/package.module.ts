import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PackageComponent } from './package.component';
import { WidgetModule } from '../layout/widget/widget.module';

export const routes = [
  { path: '', component: PackageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    WidgetModule,
    RouterModule.forChild(routes),
  ]
})
export class PackageModule {
  static routes = routes;
}
