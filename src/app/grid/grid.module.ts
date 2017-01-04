import 'jquery-ui/ui/sortable.js';

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { GridComponent } from './grid.component';

import { GridDemo } from './grid-demo/grid-demo';

export const routes = [
  { path: '', component: GridComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ GridComponent, GridDemo ]
})
export class GridModule {
  static routes = routes;
}
