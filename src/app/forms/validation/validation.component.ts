import { Component, ViewEncapsulation } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[forms-validation]',
  templateUrl: './validation.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./validation.style.scss']
})
export class Validation {
  ngOnInit(): void {
    jQuery('.parsleyjs').parsley();
  }
}
