import { Component, ElementRef } from '@angular/core';
import { AppConfig } from '../../app.config';

declare let jQuery: any;

export type Tabs = 'notifications' | 'messages' | 'progress';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.template.html',
  styleUrls: ['./notifications.style.scss']
})
export class NotificationsComponent {
  $el: any;
  config: any;

  activeTab: Tabs = 'notifications';

  constructor(el: ElementRef, config: AppConfig) {
    this.$el = jQuery(el.nativeElement);
    this.config = config;
  }

  get showNotifications(): boolean {
    return this.activeTab === 'notifications';
  }

  get showMessages(): boolean {
    return this.activeTab === 'messages';
  }

  get showProgress(): boolean {
    return this.activeTab === 'progress';
  }

  toggleTab(type: Tabs): void {
    this.activeTab = type;
  }
}
