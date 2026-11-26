
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlertModule} from 'ngx-bootstrap/alert';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { GoogleMapModule } from '../../components/google-map/google-map.module';

import { MapsGoogleComponent } from './google/maps-google.component';
import { MapsVectorComponent } from './vector/maps-vector.component';

export const routes: Routes = [
  {path: '', redirectTo: 'google', pathMatch: 'full'},
  {path: 'google', component: MapsGoogleComponent},
  {path: 'vector', component: MapsVectorComponent}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MapsGoogleComponent,
    MapsVectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertModule,
    TooltipModule,
    ButtonsModule,
    BsDropdownModule,
    GoogleMapModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    })
  ]
})
export class MapsModule {
  static routes = routes;
}
