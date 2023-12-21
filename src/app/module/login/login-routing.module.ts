import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConnectComponent } from './pages/user-connect/user-connect.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'login-user',
    component: UserConnectComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
