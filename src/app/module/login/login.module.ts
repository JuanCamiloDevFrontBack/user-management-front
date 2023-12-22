import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserConnectComponent } from './pages/user-connect/user-connect.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgZorroComponentsModule } from 'src/app/utils/ng-zorro-components/ng-zorro-components.module';


@NgModule({
  declarations: [
    UserConnectComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgZorroComponentsModule
  ]
})
export class LoginModule { }
