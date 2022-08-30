import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

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
    this.authService.getCurrentUserRoles().subscribe((data) => {
      console.log(data['roles'].player);
    });
  }
}
