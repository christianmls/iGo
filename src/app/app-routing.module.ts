import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'starter-config' },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'starter-config', loadChildren: () => import('./modules/starter-config/starter-config.module').then(m => m.StarterConfigModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
