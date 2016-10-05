import { Component, ViewEncapsulation } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class Elements {
  date: Date = new Date(2016, 5, 10);
  colorOptions: Object = {color: '#f0b518'};

  ngOnInit(): void {
    jQuery('.select2').select2();
    // jQuery('#markdown').markdown();
    jQuery('.js-slider').slider();
    jQuery('#colorpicker').colorpicker(this.colorOptions);
    jQuery('.selectpicker').selectpicker();
  }
}
