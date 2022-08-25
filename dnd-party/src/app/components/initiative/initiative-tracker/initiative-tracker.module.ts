import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { InitiativeTrackerRoutingModule } from './initiative-tracker-routing.module';
import { InitiativeMemberModule } from '../initiative-member';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [InitiativeTrackerComponent],
  imports: [
    CommonModule,
    InitiativeTrackerRoutingModule,
    InitiativeMemberModule,
    TuiButtonModule
  ],
  exports: [
    InitiativeTrackerComponent
  ]
})
export class InitiativeTrackerModule { }
