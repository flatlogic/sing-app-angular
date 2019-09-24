import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'markers-chart',
  templateUrl: './markers-chart.html'
})
export class MarkersChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;

  data: Array<any> = [
    { data: this.generate(2, 0.6), points: { symbol: 'circle' } },
    { data: this.generate(3, 0.5), points: { symbol: 'square' } },
    { data: this.generate(4, 0.8), points: { symbol: 'diamond' } },
    { data: this.generate(6, 0.7), points: { symbol: 'triangle' } },
    { data: this.generate(7, 0.2), points: { symbol: 'cross' } },
  ];

  chart: any;

  generate(offset, amplitude) {
    const result = [];
    const start = 0;
    const end = 10;
    let point;

    for (let i = 0; i <= 50; i += 1) {
      point = ((start + i) / 50) * (end - start);
      result.push([point, amplitude * Math.sin(point + offset)]);
    }

    return result;
  }

  createChart(data) {
    return jQuery.plot(jQuery(this.chartContainer.nativeElement), data, {
      series: {
        points: {
          show: true,
          radius: 3,
        },
      },
      yaxis: {
        ticks: [],
      },
      xaxis: {
        min: 1,
      },
      grid: {
        hoverable: true,
        backgroundColor: {colors: ['#ffffff', '#ffffff']},
        borderWidth: 1,
        borderColor: '#ffffff',
      },
      colors: ['#e2e1ff', '#f59f9f', '#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
    });
  }

  ngAfterViewInit() {
    this.chart = this.createChart(this.data);
  }
}
