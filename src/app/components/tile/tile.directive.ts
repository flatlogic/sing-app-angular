import {Directive, ElementRef, OnInit} from '@angular/core';
declare let jQuery: any;

@Directive ({
  standalone: false,
  selector: '[live-tile]'
})

export class LiveTileDirective implements OnInit {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  ngOnInit(): void {
    this.$el
      .css('height', this.$el.data('height'))
      .liveTile();
  }
}
