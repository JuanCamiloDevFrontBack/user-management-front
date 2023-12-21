import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNotFoundComponent } from './utils/route-not-found/route-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'features',
    loadChildren: () => import('./module/features/features.module')
    .then(m => m.FeaturesModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
