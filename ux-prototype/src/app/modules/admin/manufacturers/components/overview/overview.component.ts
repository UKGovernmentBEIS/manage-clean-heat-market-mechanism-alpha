// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminAccountProvider } from '../../providers/account.provider';
import { Manufacturer } from '../../models/manufacturer';

@Component({
  selector: 'manufacturers-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class ManufacturersOverviewComponent {
  public search: string = '';
  public showRetired: boolean = false;

  public readonly manufacturers$: Observable<Manufacturer[]>;
  constructor(
    private router: Router,
    private accountProvider: AdminAccountProvider
  ) {
    this.manufacturers$ = this.accountProvider.manufacturers$;
  }

  public shouldShow(manufacturer: Manufacturer) {
    if (this.showRetired == false && manufacturer.status == 'Retired') {
      return false;
    }

    const query = this.search.toUpperCase();
    if (!!query && manufacturer.name.toUpperCase().indexOf(query) === -1) {
      return false;
    }

    return true;
  }

  public create() {
    this.router.navigate(['admin', 'manufacturers', 'create']);
  }
}
