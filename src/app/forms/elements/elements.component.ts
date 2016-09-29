import { Component, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html'
})
export class Elements {

  ngOnInit(): void {
    jQuery('#markdown').markdown();
  }
}
