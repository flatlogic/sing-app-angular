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

  email: string = '';
  password: string = '';

  constructor(
    public loginService: LoginService,
    private route: ActivatedRoute,
    appConfig: AppConfig
  ) {
  }

  public loginWithIdentity() {
    this.loginService.loginUser();
  }
  public logout() {
    this.loginService.logoutUser();
  }

}
