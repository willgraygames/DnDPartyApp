import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginData } from 'src/app/core';
import { LoginFormComponent } from '../../login/login-form/login-form.component';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  @ViewChild(LoginFormComponent) signUpForm: LoginFormComponent;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * Registers new user then logs them in
   * @param data Login data taken from form
   */
  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() =>
        this.authService
          .login(data)
          .then((userCredential) => {
            const user = userCredential.user;
            if (this.authService.checkUserExists(user.uid)) {
              this.router.navigate(['/choose-user-type']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          })
          .catch((e) => console.log(e.message))
      )
      .catch((e) => console.log(e.message));
  }

  submitForm() {
    this.signUpForm.onSubmit();
  }
}
