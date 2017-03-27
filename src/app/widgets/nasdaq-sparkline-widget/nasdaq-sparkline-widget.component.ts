import { Component } from '@angular/core';
import { AppConfig } from '../../app.config';

declare let jQuery: any;

@Component({
  selector: '[nasdaq-sparkline-widget]',
  template: '<div jq-sparkline [data]="data" [options]="options"></div>'
})

export class NasdaqSparklineWidget {
  data: Array<number>;
  options: any;
  config: any;
  configFn: any;

  constructor(config: AppConfig) {
    this.config = config.getConfig();
    this.configFn = config;

    this.data = [4, 6, 5, 7, 5];
    this.options = {
      type: 'line',
      width: '99%',
      height: '60',
      lineColor: this.config.settings.colors.gray,
      fillColor: 'transparent',
      spotRadius: 5,
      spotColor: this.config.settings.colors.gray,
      valueSpots: {'0:': this.config.settings.colors.gray},
      highlightSpotColor: this.config.settings.colors.white,
      highlightLineColor: this.config.settings.colors.gray,
      minSpotColor: this.config.settings.colors.gray,
      maxSpotColor: this.config.settings.colors['brand-danger'],
      tooltipFormat: new jQuery
        .SPFormatClass('<span style="color: white">&#9679;</span> {{prefix}}{{y}}{{suffix}}'),
      chartRangeMin: this.configFn.min(this.data) - 1
    };
  }
}
