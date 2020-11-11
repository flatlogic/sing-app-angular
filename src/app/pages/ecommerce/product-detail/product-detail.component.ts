import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product, ProductsService} from '../products.service';
import {ActivatedRoute} from '@angular/router';
import { AppConfig } from '../../../app.config';

@Component({
  selector: '[product-detail]',
  templateUrl: './product-detail.template.html',
  styleUrls: ['./product-detail.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  config: any;

  constructor(
    private _appConfig: AppConfig,
    public productsService: ProductsService,
    public route: ActivatedRoute
  ) {
    this.config = _appConfig.getConfig();
  }

  get product(): Product {
    return this.findProduct(this.getId()) || {
      title: 'trainers',
      subtitle: 'Trainers In White',
      img: 'assets/img/products/img1.jpg',
      price: 76,
      rating: 4.6,
      description_1: 'Sneakers (also known as athletic shoes, tennis shoes,gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.',
      description_2: 'The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.',
      code: 135234,
      hashtag: 'whitetrainers',
      technology: [
        'Ollie patch',
        'Cup soles',
        'Vulcanized rubber soles'
      ]
    };
  }

  findProduct(id) {
    return this.productsService.products.find(p => p.id === id);
  }

  getId() {
    return parseInt(this.route.params['value'].id, 10);
  }

  ngOnInit(): void {
    this.productsService.getProductsRequest();
  }
}
