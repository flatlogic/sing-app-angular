import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes = [
  {path: 'product-grid', component: ProductGridComponent, pathMatch: 'full'},
  {path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ProductGridComponent,
    ProductDetailsComponent
  ],
  imports: [
    Ng2CarouselamosModule,
    ButtonsModule,
    BsDropdownModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule {
  public static routes = routes;
}
