import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterConfigRoutingModule } from './starter-config-routing.module';
import { StarterWizardComponent } from './pages/starter-wizard/starter-wizard.component';


@NgModule({
  declarations: [StarterWizardComponent],
  imports: [
    CommonModule,
    StarterConfigRoutingModule
  ]
})
export class StarterConfigModule { }
