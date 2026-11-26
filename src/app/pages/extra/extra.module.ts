
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlertModule} from 'ngx-bootstrap/alert';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';

import { CalendarComponent } from './calendar/calendar.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { GalleryComponent } from './gallery/gallery.component';

import { GoogleMapModule } from '../../components/google-map/google-map.module';

export const routes: Routes = [
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'search', component: SearchResultsComponent},
  {path: 'timeline', component: TimeLineComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CalendarComponent,
    InvoiceComponent,
    SearchResultsComponent,
    TimeLineComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule,
    TooltipModule,
    ModalModule,
    ButtonsModule,
    BsDropdownModule,
    GoogleMapModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    })
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExtraModule {
  static routes = routes;
}
