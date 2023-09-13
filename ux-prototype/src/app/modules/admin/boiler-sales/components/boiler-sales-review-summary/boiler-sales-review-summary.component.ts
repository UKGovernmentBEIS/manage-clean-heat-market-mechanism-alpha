// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBoilerSales } from 'src/app/modules/shared/models/boiler-sales.model';
import { ILink } from 'src/app/modules/shared/models/link.model';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';

@Component({
  selector: 'boiler-sales-review-summary',
  templateUrl: './boiler-sales-review-summary.component.html',
})
export class BoilerSalesReviewSummaryComponent {
  links: Partial<ILink>[] = [
    {
      route: '../manufacturers',
      name: 'Manufacturers',
    },
    {
      route: '../manufacturer',
      name: 'Manufacturer Overview',
    },
    {
      route: '../review',
      name: 'Review',
    },
  ];
  boilerSales$: Observable<IBoilerSales | null>;

  constructor(
    private boilerSalesProvider: BoilerSalesProvider,
    private router: Router
  ) {
    this.boilerSales$ = this.boilerSalesProvider.quarterlySalesForManufacturer$;
  }

  onContinue() {
    this.boilerSalesProvider.updateBoilerSales();
    this.router.navigate(['admin', 'boiler-sales', 'confirmation']);
  }

  onCancel() {
    this.router.navigate(['admin', 'boiler-sales', 'review']);
  }
}
