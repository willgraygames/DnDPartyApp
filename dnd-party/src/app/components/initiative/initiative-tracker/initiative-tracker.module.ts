import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { InitiativeTrackerRoutingModule } from './initiative-tracker-routing.module';
import { InitiativeMemberModule } from '../initiative-member';



@NgModule({
  declarations: [InitiativeTrackerComponent],
  imports: [
    CommonModule,
    InitiativeTrackerRoutingModule,
    InitiativeMemberModule
  ],
  exports: [
    InitiativeTrackerComponent
  ]
})
export class InitiativeTrackerModule { }
