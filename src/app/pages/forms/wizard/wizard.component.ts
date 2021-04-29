import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[forms-wizard]',
  templateUrl: './wizard.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wizard.style.scss']
})
export class WizardComponent implements OnInit {
  destindationMask = '00000';
  creditMask = '0000-0000-0000-0000';

  destinationValue = '';
  creditValue = '';

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  ngOnInit(): void {
    jQuery('.select2').select2();
  }
}
