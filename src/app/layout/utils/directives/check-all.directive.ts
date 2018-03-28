import {Directive, ElementRef, OnInit} from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[check-all]'
})

export class CheckAllDirective implements OnInit {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    const $el = this.$el;
    $el.on('click', function(): void {
      $el.closest('table').find('input[type=checkbox]')
        .not(this).prop('checked', jQuery(this).prop('checked'));
    });
  }
}
