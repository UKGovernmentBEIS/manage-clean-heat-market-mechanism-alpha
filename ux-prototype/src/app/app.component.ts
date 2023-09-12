import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chmm-prototype-ux';

  public constructor(router: Router) {
    router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) return;
      window.scroll(0, 0);
      (window as any).GOVUKFrontend.initAll();
    });
  }
}
