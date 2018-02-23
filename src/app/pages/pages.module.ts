import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsModule, BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterComponent } from './product-grid/components/filter/filter.component';
import { FilterDropdownComponent } from './product-grid/components/filterDropdown/filter-dropdown.component';
import { FilterModalComponent } from './product-grid/components/filterModal/filter-modal.component';
import { BannerComponent } from './product-details/components/banner/banner.component';
import { BagComponent } from './product-details/components/bag/bag.component';
import { GeneralComponent } from './product-details/components/general/general.component';
import { SelectsComponent } from './product-details/components/selects/selects.component';
import { PSectionComponent } from './product-details/components/p-section/p-section.component';
import { DescriptionComponent } from './product-details/components/description/description.component';
import { RatingComponent } from './product-details/components/rating/rating.component';
import { SliderComponent } from './product-details/components/slider/slider.component';

export const routes = [
  {path: 'product-grid', component: ProductGridComponent, pathMatch: 'full'},
  {path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ProductGridComponent,
    ProductDetailsComponent,
    FilterComponent,
    FilterDropdownComponent,
    FilterModalComponent,
    BannerComponent,
    BagComponent,
    GeneralComponent,
    SelectsComponent,
    PSectionComponent,
    DescriptionComponent,
    RatingComponent,
    SliderComponent
  ],
  imports: [
    Ng2CarouselamosModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule {
  public static routes = routes;
}
