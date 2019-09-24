import {EventEmitter} from '@angular/core';
import {DashboardThemes} from './helper.interface';

export class HelperService {
  dashboardThemes = DashboardThemes;
  _dashboardTheme: DashboardThemes = this.dashboardThemes.DARK;
  onThemeChange: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.onThemeChange.subscribe((theme: DashboardThemes) => {
      this.dashboardTheme = theme;
    });
  }

  set dashboardTheme(theme: DashboardThemes) {
    this._dashboardTheme = theme;
  }

  get dashboardTheme() {
    return this._dashboardTheme;
  }
}

