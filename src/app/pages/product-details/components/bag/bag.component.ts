import { Component, Input } from '@angular/core';

@Component({
  selector: 'bag',
  templateUrl: './bag.template.html',
  styleUrls: ['./bag.style.scss']
})
export class BagComponent {
  public favourite: boolean = false;

  toggleFavourite() {
    this.favourite = !this.favourite;
  }
}


