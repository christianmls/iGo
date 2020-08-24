import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterWizardComponent } from './pages/starter-wizard/starter-wizard.component';

const routes: Routes = [{ path: '', component: StarterWizardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterConfigRoutingModule { }
