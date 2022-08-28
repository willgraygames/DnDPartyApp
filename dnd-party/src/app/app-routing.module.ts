import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectLoggedInToDashboard),
  },
  {
    path: 'initiative-tracker',
    loadChildren: () =>
      import(
        './components/initiative/initiative-tracker/initiative-tracker.module'
      ).then((m) => m.InitiativeTrackerModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'party-dashboard',
    loadChildren: () =>
      import('./components/party/party-dashboard/party-dashboard.module').then(
        (m) => m.PartyDashboardModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('./components/member/member/member.module').then(
        (m) => m.MemberModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
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
