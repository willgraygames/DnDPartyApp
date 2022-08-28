import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';

import { LoginFormModule } from '../login-form';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginFormModule, TuiSvgModule, RouterModule],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
