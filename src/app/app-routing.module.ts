import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
