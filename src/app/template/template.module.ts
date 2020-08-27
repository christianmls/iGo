import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbIconModule, NbSpinnerModule, NbMenuModule, NbCardModule, NbInputModule, NbUserModule, NbContextMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbIconModule,
  NbMenuModule.forRoot(),
  NbSidebarModule.forRoot(),
  NbButtonModule,
  NbSpinnerModule,
  NbCardModule,
  NbInputModule,
  NbUserModule,
  NbContextMenuModule
]

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  LayoutComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [
    NB_MODULES,
    LayoutComponent
  ]
})
export class TemplateModule { }
