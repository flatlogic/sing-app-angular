import { NgModule }      from '@angular/core';

import { BootstrapWizard } from './wizard.directive';

@NgModule({
    declarations: [
        BootstrapWizard
    ],
    exports: [
        BootstrapWizard
    ]
})
export class BootstrapWizardModule {
}
