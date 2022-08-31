import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentData } from 'firebase/firestore';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core';
import { User } from 'src/app/core/services/auth/interfaces/user';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  user$: Observable<DocumentData>;
  user: User;
  subscription: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.getCurrentUserData();
    this.subscription = this.user$.subscribe((data) => {
      this.user = data as User;
      console.log(this.user);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Logs out currently logged in user
   */
  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['']))
      .catch((e) => console.log(e.message));
  }

  check() {
    this.authService.getCurrentUserData().subscribe((data) => {
      console.log(data['roles'].player);
    });
  }
}
