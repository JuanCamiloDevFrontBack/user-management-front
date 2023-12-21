import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateMenuComponent } from './pages/create-menu/create-menu.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    CreateUserComponent,
    CreateMenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
