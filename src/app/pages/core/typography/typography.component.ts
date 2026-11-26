import {Component, OnInit} from '@angular/core';
declare let jQuery: any;

@Component({
  standalone: false,
  selector: '[typography]',
  templateUrl: './typography.template.html',
  styleUrls: ['./typography.style.scss'],
  preserveWhitespaces: true
})
export class TypographyComponent {
  constructor() {
  }
}
