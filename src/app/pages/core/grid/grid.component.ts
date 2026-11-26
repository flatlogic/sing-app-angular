import {Component, OnInit} from '@angular/core';
declare let jQuery: any;

@Component({
  standalone: false,
  selector: '[grid]',
  templateUrl: './grid.template.html',
  styleUrls: ['./grid.style.scss'],
  preserveWhitespaces: true
})
export class GridComponent {
  constructor() {
  }
}
