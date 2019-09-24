import {Component, HostBinding} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  styleUrls: [ './error.style.scss' ],
  templateUrl: './error.template.html',
})
export class ErrorComponent {
  @HostBinding('class') classes = 'error-page app';

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  searchResult(): void {
    this.router.navigate(['/app', 'dashboard']);
  }
}
