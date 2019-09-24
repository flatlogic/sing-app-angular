import { Component } from '@angular/core';

@Component({
  selector: '[maps-google]',
  templateUrl: './maps-google.template.html',
  styles: ['agm-map { height: 100% }']
})
export class MapsGoogleComponent {
  lat: number = -37.813179;
  lng: number = 144.950259;
  zoom: number = 12;
}
