import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormModule } from '../../login';

import { SignUpPageComponent } from './sign-up-page.component';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [CommonModule, LoginFormModule, RouterModule],
  exports: [SignUpPageComponent],
})
export class SignUpPageModule {}
