import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from '../../app.config';
declare let jQuery: any;
declare let Rickshaw: any;

@Component({
  selector: '[changes-chart-widget]',
  templateUrl: './changes-chart-widget.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../node_modules/rickshaw/rickshaw.css']
})

export class ChangesChartWidget {
  series: Array<any>;
  config: any;
  configFn: any;
  sparklineData: Array<any>;
  sparklineOptions: Array<any>;

  constructor(config: AppConfig) {
    this.config = config.getConfig();
    this.configFn = config;
  }

  applyRickshawData(): void {
    let seriesData = [ [], [] ];
    let random = new Rickshaw.Fixtures.RandomData(10000);

    for (let i = 0; i < 32; i++) {
      random.addData(seriesData);
    }

    this.series = [{
      name: 'pop',
      data: seriesData.shift().map(function(d): Object { return { x: d.x, y: d.y }; }),
      /* tslint:disable */
      color: this.configFn.lightenColor(this.config.settings.colors['brand-success'], .09),
      /* tslint:enable */
      renderer: 'bar'
    }, {
      name: 'humidity',
      data: seriesData.shift()
        .map(function(d): Object {
          return { x: d.x, y: d.y * (Math.random() * 0.1 + 1.1) };
        }),
      renderer: 'line',
      /* tslint:disable */
      color: this.config.settings.colors['white']
      /* tslint:enable */
    }];
  };

  applySparklineData(): void {
    let data = [3, 6, 2, 4, 5, 8, 6, 8],
      dataMax = this.configFn.max(data),
      backgroundData = data.map(function(): number { return dataMax; });

    this.sparklineData = [backgroundData, data];
    this.sparklineOptions = [{
      type: 'bar',
      height: 26,
      /* tslint:disable */
      barColor: this.config.settings.colors['gray-lighter'],
      /* tslint:enable */
      barWidth: 7,
      barSpacing: 5,
      chartRangeMin: this.configFn.min(data),
      tooltipFormat: new jQuery.SPFormatClass('')
    },
      {
      composite: true,
      type: 'bar',
      /* tslint:disable */
      barColor: this.config.settings.colors['brand-success'],
      /* tslint:enable */
      barWidth: 7,
      barSpacing: 5
    }];
  };

  ngOnInit(): void {
    this.applyRickshawData();
    this.applySparklineData();
  }
}
