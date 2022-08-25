import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { InitiativeTrackerModule } from '../../initiative';

@NgModule({
  declarations: [MemberComponent],
  imports: [CommonModule, MemberRoutingModule, InitiativeTrackerModule],
})
export class MemberModule {}
