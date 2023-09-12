import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as _ from 'lodash-es';
import { cloneDeep } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoilerSalesProvider } from '../providers/boiler-sales.provider';
import { ADMIN_AREA, MANUFACTURER_AREA } from './navigation.areas';

@Component({
  selector: 'home',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  private readonly nav = new BehaviorSubject<INavElement[]>([]);
  public readonly nav$ = this.nav.asObservable();

  private readonly activeClass: string =
    'govuk-header__navigation-item--active';

  public constructor(
    private router: Router,
    boilerSalesProvider: BoilerSalesProvider
  ) {
    boilerSalesProvider.isAdmin$.subscribe((isAdmin) => {
      this.nav.next(isAdmin ? ADMIN_AREA : MANUFACTURER_AREA);
    });

    this.router.events.subscribe((val) => {
      if (!(val instanceof NavigationEnd)) return;
      this.updateNav((val as NavigationEnd).url);
    });
  }

  public ngOnInit(): void {
    this.updateNav(this.router.url);
  }

  private updateNav(url: string) {
    const myNav = cloneDeep(this.nav.value!);
    const idx = myNav.findIndex((s) => url.startsWith(s.route));
    _.forEach(myNav, (i) => (i.activeClass = ''));
    if (idx < 0) return;
    myNav[idx].activeClass = this.activeClass;

    this.nav.next(myNav);
  }
}

export class INavElement {
  text: string = '';
  route: string = '';
  activeClass: string = '';
}
