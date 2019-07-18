import {Injectable} from '@angular/core';

export interface Product {
  img: string;
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  description_1: string;
  description_2: string;
  code: number;
  hashtag: string;
  technology: string[];
  discount: number;
}

@Injectable()
export class ProductsService {
  _products: Product[] = [];

  get products() {
    return this._products;
  }

  set products(products) {
    this._products = products;
  }
}
