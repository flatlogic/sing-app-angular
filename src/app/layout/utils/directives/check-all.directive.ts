import { Directive, ElementRef } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[check-all]'
})

export class CheckAll {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    let $el = this.$el;
    $el.on('click', function(): void {
      $el.closest('table').find('input[type=checkbox]')
        .not(this).prop('checked', jQuery(this).prop('checked'));
    });
  }
}
