import { Component, ViewEncapsulation } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class Elements {

  ngOnInit(): void {
    // jQuery('.select2').select2();
    // jQuery('#markdown').markdown();
    jQuery('.selectpicker').selectpicker();
  }
}
