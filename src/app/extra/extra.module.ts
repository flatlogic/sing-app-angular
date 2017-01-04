import 'fullcalendar/dist/fullcalendar.js';
import 'jquery-ui/ui/draggable.js';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import 'shufflejs/dist/shuffle.js';
import 'moment/moment.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule,
  ButtonsModule, DropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';

import { Calendar } from './calendar/calendar.component';
import { Invoice } from './invoice/invoice.component';
import { SearchResults } from './search-results/search-results.component';
import { TimeLine } from './time-line/time-line.component';
import { Gallery } from './gallery/gallery.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

export const routes = [
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {path: 'calendar', component: Calendar},
  {path: 'invoice', component: Invoice},
  {path: 'search', component: SearchResults},
  {path: 'timeline', component: TimeLine},
  {path: 'gallery', component: Gallery}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Calendar,
    Invoice,
    SearchResults,
    TimeLine,
    Gallery
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule,
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    })
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExtraModule {
  static routes = routes;
}
