import { Component } from '@angular/core';

@Component({
  selector: '[buttons]',
  templateUrl: './buttons.template.html',
  styleUrls: ['./buttons.style.scss']
})
export class Buttons {
  checkboxModel: Object = { left: false, middle: true, right: false };
  checkbox2Model: Object = { left: false, middle: false, right: false };
  radioModel: string = 'Middle';
  radio2Model: string = 'Left';
}
