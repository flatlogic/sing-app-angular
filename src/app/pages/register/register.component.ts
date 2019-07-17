import {Component, HostBinding} from '@angular/core';
import {RegisterService} from './register.service';
import {LoginService} from '../login/login.service';
import {ActivatedRoute} from '@angular/router';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-login',
  templateUrl: './register.template.html'
})
export class RegisterComponent {
  @HostBinding('class') classes = 'auth-page app';

  private email: string = '';
  private password: string = '';
  private confirmPassword: string = '';

  constructor(
    public loginService: LoginService,
    public registerService: RegisterService,
    private route: ActivatedRoute,
    appConfig: AppConfig
  ) {
    const config: any = appConfig.getConfig();
  }

  private register() {
    const email = this.email;
    const password = this.password;

    if (!this.isPasswordValid()) {
      this.checkPassword();
    } else {
      this.registerService.registerUser({email, password});
    }
  }

  checkPassword() {
    if (!this.isPasswordValid()) {
      if (!this.password) {
        this.registerService.registerError('Password field is empty');
      } else {
        this.registerService.registerError('Passwords are not equal');
      }
      setTimeout(() => {
        this.registerService.registerError('');
      }, 3 * 1000);
    }
  }

  isPasswordValid() {
    return this.password && this.password === this.confirmPassword;
  }

  private googleLogin() {
    this.loginService.loginUser({social: 'google'});
  }

  private microsoftLogin() {
    this.loginService.loginUser({social: 'microsoft'});
  }
}
