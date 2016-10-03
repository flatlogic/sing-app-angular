import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[extra-invoice]',
  template: require('./invoice.template.html'),
  encapsulation: ViewEncapsulation.None,
  styles: [require('./invoice.style.scss')]
})
export class Invoice {
  print(): void {
    window.print();
  };
}
