import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[extra-search-results]',
  template: require('./search-results.template.html'),
  encapsulation: ViewEncapsulation.None,
  styles: [require('./search-results.style.scss')]
})
export class SearchResults {
}
