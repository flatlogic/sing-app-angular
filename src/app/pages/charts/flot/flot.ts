import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare let jQuery: any;


@Component({
  standalone: false,
  selector: 'flot',
  templateUrl: './flot.html'
})
export class FlotComponent implements AfterViewInit {
  @ViewChild('sparklines1', {static: true}) sparklines1: ElementRef;
  @ViewChild('sparklines2', {static: true}) sparklines2: ElementRef;

  initSparkline(ref) {
    const spark = jQuery(this[ref].nativeElement);
    spark.sparkline('html', spark.data());
  }

  ngAfterViewInit() {
    this.initSparkline('sparklines1');
    this.initSparkline('sparklines2');
  }
}
