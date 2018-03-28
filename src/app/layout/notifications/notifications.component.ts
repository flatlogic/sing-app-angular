import { Component, ElementRef } from '@angular/core';
import { AppConfig } from '../../app.config';
declare let jQuery: any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.template.html',
  styleUrls: ['./notifications.style.scss']
})
export class NotificationsComponent {
  $el: any;
  config: any;

  constructor(el: ElementRef, config: AppConfig) {
    this.$el = jQuery(el.nativeElement);
    this.config = config;
  }
}
