import {AppConfig} from '../../app.config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Injectable} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {delay, map} from 'rxjs/operators';

const jwt = new JwtHelperService();

@Injectable()
export class LoginService {
  config: any;
  _isFetching: boolean = false;
  _errorMessage: string = '';

  constructor(
    appConfig: AppConfig,
    private http: HttpClient,
    private router: Router,
    private oidcSecurityService: OidcSecurityService
  ) {
    this.config = appConfig.getConfig();
  }

  get isFetching() {
    return this._isFetching;
  }

  set isFetching(val: boolean) {
    this._isFetching = val;
  }

  get errorMessage() {
    return this._errorMessage;
  }

  set errorMessage(val: string) {
    this._errorMessage = val;
  }

  isAuthenticated() {
    return this.oidcSecurityService.getIsAuthorized().pipe(
      delay(50),
      map((isAuthorized: boolean) => {
        if (!isAuthorized) {
          this.loginUser();
          return false;
        }
        return true;
      })
    );
  }

  loginUser(social?): void {
    this.oidcSecurityService.authorize();
  }

  receiveToken(token) {
    const user = jwt.decodeToken(token).user;
    delete user.id;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.receiveLogin();
  }

  logoutUser() {
    this.oidcSecurityService.logoff();
  }

  authorizedCallbackWithCode() {
    this.oidcSecurityService.authorizedCallbackWithCode(window.location.toString());
  }

  loginError(payload) {
    this.isFetching = false;
    this.errorMessage = payload;
  }

  receiveLogin() {
    this.isFetching = false;
    this.errorMessage = '';
    this.router.navigate(['/app/analytics']);
  }

  requestLogin() {
    this.isFetching = true;
  }
}
