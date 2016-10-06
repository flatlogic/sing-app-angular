import { Component, ViewEncapsulation } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: '[forms-wizard]',
  templateUrl: './wizard.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wizard.style.scss']
})
export class Wizard {

  ngOnInit(): void {
    jQuery('.select2').select2();
  }
}
