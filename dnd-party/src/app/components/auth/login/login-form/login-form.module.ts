import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    FormsModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiSvgModule,
  ],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
