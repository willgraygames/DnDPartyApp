import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageModule } from './login';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, LoginPageModule],
})
export class AuthModule {}
