import {Component, Input} from '@angular/core';


@Component({
  standalone: false,
  selector: 'loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss']
})

export class LoaderComponent {
  @Input() size: number = 21;
}
