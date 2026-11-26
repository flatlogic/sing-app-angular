import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import createSkycons from 'skycons';

@Directive({
  standalone: false,
  selector: '[skycon]'
})
export class SkyconDirective implements OnInit, OnDestroy {
  @Input() color: string;
  @Input() weather: string;
  private icons: any;

  constructor(private element: ElementRef<HTMLCanvasElement>) {}

  ngOnInit(): void {
    const Skycons = createSkycons(window);
    this.icons = new Skycons({color: this.color});
    this.icons.set(this.element.nativeElement, this.weather);
    this.icons.play();
  }

  ngOnDestroy(): void {
    this.icons.pause();
  }
}
