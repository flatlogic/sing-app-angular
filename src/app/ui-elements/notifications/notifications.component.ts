import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[ui-components]',
  template: require('./notifications.template.html'),
  encapsulation: ViewEncapsulation.None,
  styles: [require('./notifications.style.scss')]
})
export class Notifications {
}

