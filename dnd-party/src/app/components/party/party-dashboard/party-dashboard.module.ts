import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyDashboardRoutingModule } from './party-dashboard-routing.module';
import { PartyDashboardComponent } from './party-dashboard.component';


@NgModule({
  declarations: [
    PartyDashboardComponent
  ],
  imports: [
    CommonModule,
    PartyDashboardRoutingModule
  ]
})
export class PartyDashboardModule { }
