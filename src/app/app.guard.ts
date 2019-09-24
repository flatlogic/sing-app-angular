import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './pages/login/login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkUser();
  }

  private checkUser(): Observable<boolean> {
    return this.loginService.isAuthenticated();
  }
}
