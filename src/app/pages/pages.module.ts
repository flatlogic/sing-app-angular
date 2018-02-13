import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';

import { ProductGridComponent } from './product-grid/product-grid.component';

export const routes = [
  {path: 'product-grid', component: ProductGridComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ProductGridComponent
  ],
  imports: [
    ButtonsModule,
    BsDropdownModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule {
  public static routes = routes;
}
