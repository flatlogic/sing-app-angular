import {Component, HostBinding} from '@angular/core';
import {HelperService} from './helper.service';
import {DashboardThemes} from './helper.interface';

@Component({
  selector: 'theme-helper',
  templateUrl: './helper.template.html',
  styleUrls: ['./helper.style.scss']
})
export class HelperComponent {
  dashboardThemes = DashboardThemes;
  @HostBinding('class.theme-helper') themeHelperClass = true;
  @HostBinding('class.theme-helper-opened') isOpened = false;

  constructor(public helperService: HelperService) {}

  toggle() {
    this.isOpened = !this.isOpened;
  }

  changeTheme(theme: DashboardThemes) {
    this.helperService.onThemeChange.emit(theme);
  }
}
