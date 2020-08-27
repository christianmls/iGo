import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbLayoutModule, NbCardModule, NbStepperModule } from '@nebular/theme';

import { StarterConfigRoutingModule } from './starter-config-routing.module';
import { StarterWizardComponent } from './pages/starter-wizard/starter-wizard.component';

@NgModule({
  declarations: [StarterWizardComponent],
  imports: [
    CommonModule,
    StarterConfigRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbStepperModule
  ]
})
export class StarterConfigModule { }
