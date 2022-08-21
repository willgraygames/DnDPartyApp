import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiativeMemberComponent } from './initiative-member.component';

const routes: Routes = [{ path: '/initiative-member', component: InitiativeMemberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiativeMemberRoutingModule { }
