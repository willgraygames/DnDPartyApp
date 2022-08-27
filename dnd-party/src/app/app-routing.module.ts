import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'initiative-member',
    loadChildren: () =>
      import(
        './components/initiative/initiative-member/initiative-member.module'
      ).then((m) => m.InitiativeMemberModule),
  },
  {
    path: 'initiative-tracker',
    loadChildren: () =>
      import(
        './components/initiative/initiative-tracker/initiative-tracker.module'
      ).then((m) => m.InitiativeTrackerModule),
  },
  {
    path: 'party-dashboard',
    loadChildren: () =>
      import('./components/party/party-dashboard/party-dashboard.module').then(
        (m) => m.PartyDashboardModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('./components/member/member/member.module').then(
        (m) => m.MemberModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
