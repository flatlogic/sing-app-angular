import {AppConfig} from '../../app.config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Injectable} from '@angular/core';
import { exception } from 'console';

const jwt = new JwtHelperService();

@Injectable()
export class LoginService {
  config: any;
  _isFetching: boolean = false;
  _errorMessage: string = '';

  constructor(
    private _appConfig: AppConfig,
    private http: HttpClient,
    private router: Router,
  ) {
    this.config = _appConfig.getConfig();
  }

  private _navigateTo(path: string[]) {
    if(!path || path.length === 0) {
      path = [ '/' ];
    }

    this.router.navigate(path);
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
    const token = localStorage.getItem('token');
    let data = null;

    // We check if app runs with backend mode
    if (!this.config.isBackend && token) return true;
    if (!token) return;
    const date = new Date().getTime() / 1000;
    try {
    data = jwt.decodeToken(token);
    } catch(e) {
      this._navigateTo([ '/login' ]);
    }
    if (!data) return;
    return date < data.exp;
  }

  loginUser(creds) {
    // We check if app runs with backend mode
    if (!this.config.isBackend) {
      this.receiveToken('token');
    } else {
      this.requestLogin();

      if (creds.email.length > 0 && creds.password.length > 0) {
        this.http.post(`/account/login`, creds).subscribe((res: any) => {
          const token = res.accessToken;
          if(!token) {
            throw new Error("There is no token!");
          }

          this.receiveToken(token);
        }, err => {
          this.loginError('Something was wrong. Try again');
        });
      }
    }
  }

  receiveToken(token) {
    let decodedToken = null;
    let user: any = {};
    // We check if app runs with backend mode
    if (this.config.isBackend) {
      decodedToken = jwt.decodeToken(token);
      if(decodedToken) {
        user = {
          email: decodedToken[this.config.tokenEmailField]
        };
      }
    } else {
      user = {
        email: this.config.auth.email
      };
    }

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.receiveLogin();
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this._navigateTo([ '/login' ]);
  }

  loginError(payload) {
    this.isFetching = false;
    this.errorMessage = payload;
  }

  receiveLogin() {
    this.isFetching = false;
    this.errorMessage = '';
    this._navigateTo([ 'app', 'analytics' ]);
  }

  requestLogin() {
    this.isFetching = true;
  }
}
