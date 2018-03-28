import {NgModule} from '@angular/core';

import {WidgetDirective} from './widget.directive';

@NgModule({
  exports: [WidgetDirective],
  declarations: [WidgetDirective]
})
export class WidgetModule {
}
