import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {AppConfig} from './app.config';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  config;

  private oidcSecurityService: OidcSecurityService;

  constructor(private injector: Injector, appConfig: AppConfig) {
    this.config = appConfig.getConfig();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToForward = req;

    if (this.oidcSecurityService === undefined) {
      this.oidcSecurityService = this.injector.get(OidcSecurityService);
    }
    if (this.oidcSecurityService !== undefined) {
      const token = this.oidcSecurityService.getToken();
      if (token !== '') {
        const tokenValue = 'Bearer ' + token;
        requestToForward = req.clone({ setHeaders: { Authorization: tokenValue } });
      }
    } else {
      console.log('OidcSecurityService undefined: NO auth header!');
    }

    return next.handle(requestToForward);
  }
}
