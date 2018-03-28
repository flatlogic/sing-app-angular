import { Component, ViewEncapsulation } from '@angular/core';

import { AppConfig } from '../app.config';

@Component({
  selector: 'widgets',
  templateUrl: './widgets.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./widgets.style.scss']
})
export class WidgetsComponent {
  config: any;
  configFn: any;

  constructor(config: AppConfig) {
    this.configFn = config;
    this.config = config.getConfig();
  }
}
