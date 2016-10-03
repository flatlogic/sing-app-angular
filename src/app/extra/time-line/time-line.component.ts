import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[extra-time-line]',
  template: require('./time-line.template.html'),
  encapsulation: ViewEncapsulation.None,
  styles: [require('./time-line.style.scss')]
})
export class TimeLine {
}
