import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEnterpriceComponent } from './create-enterprice/create-enterprice.component';
import {EditEnterpriceComponent} from './edit-enterprice/edit-enterprice.component';
import {ListEnterpriceComponent} from './list-enterprice/list-enterprice.component';
import {ViewEnterpriceComponent} from './view-enterprice/view-enterprice.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateEnterpriceComponent,
        data: {
          title: 'Create Enterprice'
        }
      },
      {
        path: 'edit/:id',
        component: EditEnterpriceComponent,
        data: {
          title: 'Create Enterprice'
        }
      },
      {
        path: 'list',
        component: ListEnterpriceComponent,
        data: {
          title: 'Create Enterprice'
        }
      },
      {
        path: 'view',
        component: ViewEnterpriceComponent,
        data: {
          title: 'Create Enterprice'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriceRoutingModule { }
