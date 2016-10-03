import { Component } from '@angular/core';

@Component({
  selector: '[maps-google]',
  template: require('./maps-google.template.html'),
  styles: ['sebm-google-map { height: 100% }']
})
export class MapsGoogle {
  lat: number = -37.813179;
  lng: number = 144.950259;
  zoom: number = 12;
}
