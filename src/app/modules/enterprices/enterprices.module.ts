import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEnterpriceComponent } from './create-enterprice/create-enterprice.component';
import {EnterpriceRoutingModule} from './enterprice-routing.module';
import { EditEnterpriceComponent } from './edit-enterprice/edit-enterprice.component';
import { ViewEnterpriceComponent } from './view-enterprice/view-enterprice.component';
import { ListEnterpriceComponent } from './list-enterprice/list-enterprice.component';


@NgModule({
  declarations: [CreateEnterpriceComponent, EditEnterpriceComponent, ViewEnterpriceComponent, ListEnterpriceComponent],
  imports: [
    CommonModule,
    EnterpriceRoutingModule
  ]
})
export class EnterpricesModule { }
