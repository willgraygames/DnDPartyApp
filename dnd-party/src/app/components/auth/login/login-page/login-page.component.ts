import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';
import { AuthService, LoginData } from 'src/app/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  @ViewChild(LoginFormComponent) loginForm: LoginFormComponent;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * Logs in user based on given LoginData
   * @param loginData Login data taken from form
   */
  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .then((userCredential) => {
        this.checkUserExists(userCredential);
      })
      .catch((e) => console.log(e.message));
  }

  /**
   * Logs in user using Google sign-on
   */
  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then((userCredential) => {
        this.checkUserExists(userCredential);
      })
      .catch((e) => console.log(e.message));
  }

  submitForm() {
    this.loginForm.onSubmit();
  }

  checkUserExists(userCredential: UserCredential) {
    const user = userCredential.user;
    if (this.authService.checkUserExists(user.uid)) {
      this.router.navigate(['/choose-user-type']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
