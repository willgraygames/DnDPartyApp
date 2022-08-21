import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativeMemberRoutingModule } from './initiative-member-routing.module';
import { InitiativeMemberComponent } from './initiative-member.component';


@NgModule({
  declarations: [
    InitiativeMemberComponent
  ],
  imports: [
    CommonModule,
    InitiativeMemberRoutingModule
  ],
  exports: [
    InitiativeMemberComponent
  ]
})
export class InitiativeMemberModule { }
