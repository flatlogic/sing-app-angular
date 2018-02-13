import { Component, ViewEncapsulation } from '@angular/core';

import mock, { toggle } from '../mock';

@Component({
  selector: '[product-grid]',
  templateUrl: './product-grid.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./product-grid.style.scss']
})
export class ProductGridComponent {
  public products = mock;

  public changeItem = function(id) {
    toggle.call(this, id);
  };
}
