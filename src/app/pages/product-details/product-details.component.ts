import { Component, ViewEncapsulation } from '@angular/core';

import mock, { toggle } from '../product-grid/products.mock';
import DescriptionMock from './description.mock';

@Component({
  selector: '[product-details]',
  templateUrl: './product-details.template.html',
  styleUrls: ['./product-details.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {
  public description: Array<any> = DescriptionMock;
  public products: Array<any> = mock;
}
