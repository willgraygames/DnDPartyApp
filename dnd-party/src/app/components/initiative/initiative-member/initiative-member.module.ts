import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativeMemberRoutingModule } from './initiative-member-routing.module';
import { InitiativeMemberComponent } from './initiative-member.component';
import { TuiExpandModule } from '@taiga-ui/core';
import { StatBubbleModule } from 'src/app/ui';
import { TuiProgressModule } from '@taiga-ui/kit';


@NgModule({
  declarations: [
    InitiativeMemberComponent
  ],
  imports: [
    CommonModule,
    InitiativeMemberRoutingModule,
    TuiExpandModule,
    StatBubbleModule,
    TuiProgressModule
  ],
  exports: [
    InitiativeMemberComponent
  ]
})
export class InitiativeMemberModule { }
