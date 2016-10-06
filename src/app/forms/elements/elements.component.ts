import { Component, ViewEncapsulation, Injector } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { __platform_browser_private__ } from '@angular/platform-browser'
import * as data from './elements.data';
declare var jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class Elements {
  date: Date = new Date(2016, 5, 10);
  colorOptions: Object = {color: '#f0b518'};
  injector: Injector;
  domSharedStylesHost: any;
  selected: any;

  constructor(injector: Injector) {
    //
    // This is a hack on angular style loader to prevent ng2-select2 from adding its styles.
    // They are hard-coded into the component, so there are no other way to get rid of them
    //
    this.domSharedStylesHost = injector.get(__platform_browser_private__.DomSharedStylesHost);
    this.domSharedStylesHost.__onStylesAdded__ = this.domSharedStylesHost.onStylesAdded;
    this.domSharedStylesHost.onStylesAdded = (additions) => {
      const style = additions[0];
      if (!style || !style.trim().startsWith(".select2-container")) {
        this.domSharedStylesHost.__onStylesAdded__(additions);
      }
    }
  }

  ngOnInit(): void {
    jQuery('#markdown-editor').markdown();
    jQuery('.js-slider').slider();
    jQuery('#colorpicker').colorpicker(this.colorOptions);
    jQuery('.selectpicker').selectpicker();
  }

  getSelect2DefaultList(): Select2OptionData[] {
    return data.select2DefaultData;
  }

  getSelect2GroupedList(): Select2OptionData[] {
    return data.select2GroupedData;
  }

  select2Changed(e: any): void {
    this.selected = e.value;
  }

  ngOnDestroy(): void {
    // detach custom hook
    this.domSharedStylesHost.onStylesAdded = this.domSharedStylesHost.__onStylesAdded__;
  }
}
