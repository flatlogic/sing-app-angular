import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from '../../app.config';
declare let Rickshaw: any;

@Component({
  selector: '[realtime-traffic-widget]',
  templateUrl: './realtime-traffic-widget.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../node_modules/rickshaw/rickshaw.css']
})

export class RealtimeTrafficWidget {
  seriesData: Array<any> = [ [], [] ];
  random: any;
  series: Array<any>;
  config: any;

  constructor(config: AppConfig) {
    this.config = config.getConfig();

    this.random = new Rickshaw.Fixtures.RandomData(30);

    for (let i = 0; i < 30; i++) {
      this.random.addData(this.seriesData);
    }
    this.series = [
      {
        color: this.config.settings.colors['gray-dark'],
        data: this.seriesData[0],
        name: 'Uploads'
      }, {
        color: this.config.settings.colors.gray,
        data: this.seriesData[1],
        name: 'Downloads'
      }
    ];
  }
}
