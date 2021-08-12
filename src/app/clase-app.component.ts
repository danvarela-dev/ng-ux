import { Component } from '@angular/core';

@Component({
  selector: 'app-clase',
  template: `
    <clase-navbar></clase-navbar>
    <!--<clase-list></clase-list>-->
    <router-outlet></router-outlet>
  `,
})
export class ClaseAppComponent {
  title = 'ng-ux';
}
