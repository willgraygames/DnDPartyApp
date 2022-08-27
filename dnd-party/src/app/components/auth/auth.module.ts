import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormModule, LoginPageModule } from './login';
import { AuthService } from 'src/app/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, LoginPageModule, LoginFormModule],
  providers: [AuthService],
})
export class AuthModule {}
