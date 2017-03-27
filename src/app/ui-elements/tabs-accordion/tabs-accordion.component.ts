import { Component } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: '[ui-tabs-accordion]',
  template: require('./tabs-accordion.template.html')
})
export class TabsAccordion {
  ngOnInit(): void {
    jQuery('.nav-tabs').on('shown.bs.tab', 'a', (e) => {
      if (e.relatedTarget) {
        jQuery(e.relatedTarget).removeClass('active');
      }
    });
  }
}

