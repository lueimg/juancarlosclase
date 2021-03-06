import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
/**
 * App componet
 * This is the first component to load the application
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/jcyovera/angular2Example';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
