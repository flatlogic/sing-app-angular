import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'theme-helper',
  templateUrl: './helper.template.html',
  styleUrls: ['./helper.style.scss']
})
export class HelperComponent {
  @HostBinding('class.theme-helper') themeHelperClass = true;
  @HostBinding('class.theme-helper-opened') isOpened = false;

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
