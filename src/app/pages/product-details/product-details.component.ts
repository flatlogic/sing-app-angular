import { Component, ViewEncapsulation } from '@angular/core';

import mock, { toggle } from '../mock';

@Component({
  selector: '[product-details]',
  templateUrl: './product-details.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./product-details.style.scss']
})
export class ProductDetailsComponent {
  public products = mock;
  public isItemStarred: boolean = false;
  public quantility: number = 1;
  public size: number = 0;

  public toggleSliderProductStarred = function(id) {
    toggle.call(this, id);
  };

  public toggleProductStarred = function() {
    this.isItemStarred = !this.isItemStarred;
  };

  public changeSize = function(size) {
    this.size = size;
  };

  public changeQuantility = function(quantility) {
    this.quantility = quantility;
  };
}
