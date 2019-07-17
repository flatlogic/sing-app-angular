import {Component, HostBinding} from '@angular/core';
import {LoginService} from './login.service';
import {ActivatedRoute} from '@angular/router';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html'
})
export class LoginComponent {
  @HostBinding('class') classes = 'auth-page app';

  private email: string = '';
  private password: string = '';

  constructor(
    public loginService: LoginService,
    private route: ActivatedRoute,
    appConfig: AppConfig
  ) {
    const config: any = appConfig.getConfig();
    const creds = config.auth;
    this.email = creds.email;
    this.password = creds.password;

    if (this.loginService.isAuthenticated()) {
      this.loginService.receiveLogin();
    }

    this.route.queryParams.subscribe((params) => {
      if (params.token) {
        this.loginService.receiveToken(params.token);
      }
    });
  }

  private login() {
    const {email, password} = this;

    if (email.length !== 0 && password.length !== 0) {
      this.loginService.loginUser({email, password});
    }
  }

  private googleLogin() {
    this.loginService.loginUser({social: 'google'});
  }

  private microsoftLogin() {
    this.loginService.loginUser({social: 'microsoft'});
  }
}
