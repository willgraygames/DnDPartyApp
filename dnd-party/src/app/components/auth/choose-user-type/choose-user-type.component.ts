import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';
import { Roles } from 'src/app/core/services/auth/interfaces/user';

@Component({
  selector: 'choose-user-type',
  templateUrl: './choose-user-type.component.html',
  styleUrls: ['./choose-user-type.component.scss'],
})
export class ChooseUserTypeComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  createNewUserWithRoles(roles: Roles) {
    this.authService.createNewUserFromCurrent(roles);
    this.router.navigate(['/dashboard']);
  }
}
