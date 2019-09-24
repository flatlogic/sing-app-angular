import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { ErrorComponent } from './pages/error/error.component';
import {AppInterceptor} from './app.interceptor';
import {LoginService} from './pages/login/login.service';
import {AppGuard} from './app.guard';
import {AuthModule, AuthWellKnownEndpoints, OidcSecurityService, OpenIdConfiguration} from 'angular-auth-oidc-client';

const APP_PROVIDERS = [
  AppConfig,
  LoginService,
  AppGuard,
  OidcSecurityService
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [
    APP_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
    }
  ]
})
export class AppModule {
  authUrl = this.appConfig.config.identityServer;
  originUrl = this.appConfig.config.appUrl;
  constructor(private appConfig: AppConfig, private oidcSecurityService: OidcSecurityService) {
    const config: OpenIdConfiguration = {
      stsServer: this.authUrl,
      redirect_url: this.originUrl + '/#/auth-callback',
      client_id: 'angular_sing_application',
      response_type: 'code',
      scope: 'openid profile sing_dotnet_core_api',
      post_logout_redirect_uri: this.originUrl,
      silent_renew: true,
      silent_renew_url: this.originUrl + '/silent-renew.html',
      history_cleanup_off: true,
      auto_userinfo: true,
      log_console_warning_active: true,
      log_console_debug_active: true,
      max_id_token_iat_offset_allowed_in_seconds: 10,
    };

    const authWellKnownEndpoints: AuthWellKnownEndpoints = {
      issuer: this.authUrl,
      jwks_uri: this.authUrl + '/.well-known/openid-configuration/jwks',
      authorization_endpoint: this.authUrl + '/connect/authorize',
      token_endpoint: this.authUrl + '/connect/token',
      userinfo_endpoint: this.authUrl + '/connect/userinfo',
      end_session_endpoint: this.authUrl + '/connect/endsession',
      check_session_iframe: this.authUrl + '/connect/checksession',
      revocation_endpoint: this.authUrl + '/connect/revocation',
      introspection_endpoint: this.authUrl + '/connect/introspect',
    };

    this.oidcSecurityService.setupModule(config, authWellKnownEndpoints);
  }
}
