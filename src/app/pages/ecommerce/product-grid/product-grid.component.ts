import {Component, OnInit} from '@angular/core';

import mockFilters from './filters.mock';
import {Router} from '@angular/router';
import { AppConfig } from '../../../app.config';
import {ProductsService} from '../products.service';

@Component({
  selector: '[product-grid]',
  templateUrl: './product-grid.template.html',
  styleUrls: ['./product-grid.style.scss', './product-card.style.scss']
})
export class ProductGridComponent implements OnInit {
  public filters = mockFilters;
  public activeModalFilter: number = null;
  config: any;

  constructor(
    private _appConfig: AppConfig,
    public productsService: ProductsService,
    public router: Router
  ) {
    this.config = _appConfig.getConfig();
  }

  ngOnInit(): void {
    this.productsService.getProductsRequest();
  }

  public changeItem (product) {
    product.starred = !product.starred;
  }

  getLabel(product) {
    return product.discount ? 'Sale' :
      product.createdAt === product.updatedAt ?
        'New' :
        null;
  }

  newPrice(product) {
    return product.discount ?
      product.price - (product.price * product.discount / 100) :
      product.price;
  }

  public openModal(id) {
    this.activeModalFilter = id;
  }

  public closeModal() {
    this.activeModalFilter = null;
  }
}
