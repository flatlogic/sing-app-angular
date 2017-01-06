import { Directive, ElementRef } from '@angular/core';
declare var jQuery: any;
declare var Dropzone: any;

Dropzone.autoDiscover = false;

@Directive ({
  selector: '[dropzone-demo]'
})

export class DropzoneDemo {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
    this.$el.addClass('dropzone');
  }

  ngOnInit(): void {
    let dropzone = new Dropzone(this.$el[0], {});
  }

}
