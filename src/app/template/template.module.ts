import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbSidebarModule.forRoot(),
  NbEvaIconsModule,
  NbButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NB_MODULES
  ],
  exports: [
    NB_MODULES
  ]
})
export class TemplateModule { }
