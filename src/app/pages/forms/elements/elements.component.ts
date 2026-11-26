import {
  Component, ViewEncapsulation, AfterViewInit, ElementRef,
  OnDestroy
} from '@angular/core';
import { Select2OptionData } from './elements.data';
import 'trix';
import EasyMDE from 'easymde';
import * as data from './elements.data';
declare const jQuery: any;

@Component({
  standalone: false,
  selector: '[elements]',
  templateUrl: './elements.template.html',
  // styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class ElementsComponent implements AfterViewInit, OnDestroy {
  date = '2021-06-10T12:00';
  colorOptions: Object = {color: '#f0b518'};
  private markdown: EasyMDE;
  selected: any;
  select2Options: any = {
    theme: 'bootstrap'
  };

  phoneMask = '(000) 000-0000';
  interPhoneMask = '+000 000 0000 0000';
  dateMask = '00-00-0000';
  timeMask = '00:00';

  phoneValue = '';
  interPhoneValue = '';
  dateValue = '';
  timeValue = '';

  constructor(private element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.markdown = new EasyMDE({element: this.element.nativeElement.querySelector('#markdown-editor'), spellChecker: false});
    jQuery('.enhanced-select').select2(this.select2Options);
    jQuery('#default-select').on('change.sing', (event) => { this.selected = event.target.value; });
    jQuery('.js-slider').slider();
    jQuery('#colorpicker').colorpicker(this.colorOptions);
    jQuery('.selectpicker').selectpicker();
  }

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  getSelect2DefaultList(): Select2OptionData[] {
    return data.select2DefaultData;
  }

  getSelect2GroupedList(): Select2OptionData[] {
    return data.select2GroupedData;
  }

  ngOnDestroy(): void {
    this.markdown.toTextArea();
    jQuery('.enhanced-select', this.element.nativeElement).off('.sing').select2('destroy');
  }
}
