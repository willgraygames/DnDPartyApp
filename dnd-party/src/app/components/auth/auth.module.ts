import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormModule, LoginPageModule } from './login';
import { AuthService } from 'src/app/core';
import { SignUpPageModule } from './sign-up';
import { ChooseUserTypeModule } from './choose-user-type';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginPageModule,
    LoginFormModule,
    SignUpPageModule,
    ChooseUserTypeModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
