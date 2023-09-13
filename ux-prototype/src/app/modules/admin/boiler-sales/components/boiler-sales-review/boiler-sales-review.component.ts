// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoilerSales } from 'src/app/modules/shared/models/boiler-sales.model';
import { Router } from '@angular/router';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';
import { ILink } from 'src/app/modules/shared/models/link.model';

@Component({
  selector: 'boiler-sales-review',
  templateUrl: './boiler-sales-review.component.html',
})
export class BoilerSalesReviewComponent {
  links: Partial<ILink>[] = [
    {
      route: '../manufacturers',
      name: 'Manufacturers',
    },
    {
      route: '../manufacturer',
      name: 'Manufacturer Overview',
    },
  ];
  year = this.boilerSalesProvider.year;
  boilerSales$: Observable<IBoilerSales | null>;

  constructor(
    private boilerSalesProvider: BoilerSalesProvider,
    private router: Router
  ) {
    this.boilerSales$ = this.boilerSalesProvider.quarterlySalesForManufacturer$;
  }

  onEdit() {
    this.router.navigate(['admin', 'boiler-sales', 'edit']);
  }

  onAddNote() {
    this.router.navigate(['admin', 'boiler-sales', 'make-note']);
  }

  onComplete() {
    this.router.navigate(['admin', 'boiler-sales', 'summary']);
  }
}
