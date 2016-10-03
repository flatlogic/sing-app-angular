import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[ui-tabs-accordion]',
  template: require('./icons.template.html'),
  encapsulation: ViewEncapsulation.None,
  styles: [require('./icons.style.scss')]
})
export class Icons {
}

