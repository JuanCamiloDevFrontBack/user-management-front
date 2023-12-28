import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMenuComponent } from './pages/create-menu/create-menu.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'create-menu',
    component: CreateMenuComponent
  },
  { path: '', redirectTo: 'create-user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
