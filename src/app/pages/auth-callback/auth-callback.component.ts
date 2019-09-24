import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) { }

  async ngOnInit() {
    if (this.route.snapshot.queryParamMap.has('code') && this.route.snapshot.queryParamMap.has('state')) {
      this.doCallbackLogicIfRequired();
      this.router.navigate(['../app/analytics']);
    } else {
      this.router.navigate(['../login']);
    }
  }

  private doCallbackLogicIfRequired() {
    // Will do a callback, if the url has a code and state parameter.
    this.loginService.authorizedCallbackWithCode();
  }

}
