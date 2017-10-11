import { Component, ElementRef } from '@angular/core';
import { AppConfig } from '../../app.config';
declare let jQuery: any;

@Component({
  selector: '[notifications]',
  templateUrl: './notifications.template.html',
  styleUrls: ['./notifications.style.scss']
})
export class Notifications {
  $el: any;
  config: any;

  constructor(el: ElementRef, config: AppConfig) {
    this.$el = jQuery(el.nativeElement);
    this.config = config;
  }
}
