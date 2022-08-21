import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyDashboardComponent } from './party-dashboard.component';

const routes: Routes = [{ path: '', component: PartyDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyDashboardRoutingModule { }
