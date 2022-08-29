import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseUserTypeComponent } from './choose-user-type/choose-user-type.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignUpPageComponent } from './sign-up/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'register',
    component: SignUpPageComponent,
  },
  {
    path: 'choose-user-type',
    component: ChooseUserTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
