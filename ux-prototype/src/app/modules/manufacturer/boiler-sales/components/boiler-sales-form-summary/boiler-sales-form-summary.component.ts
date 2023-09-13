// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBoilerSalesData } from '../../../../shared/models/boiler-sales-data.model';
import { BoilerSalesProvider } from '../../../../shared/providers/boiler-sales.provider';
import { quarter } from 'src/app/modules/shared/models/boiler-sales.model';
import { ILink } from 'src/app/modules/shared/models/link.model';

@Component({
  selector: 'boiler-sales-form-summary',
  templateUrl: './boiler-sales-form-summary.component.html',
})
export class BoilerSalesFormSummaryComponent {
  links: Partial<ILink>[] = [
    {
      route: '../overview',
      name: 'Boiler Sales Data',
    },
    {
      route: '../add',
      name: 'Report Sales Data',
    },
  ];
  year = this.boilerSalesProvider.year;
  quarter$: Observable<quarter | null>;
  boilerSalesData$: Observable<IBoilerSalesData>;

  constructor(
    private boilerSalesProvider: BoilerSalesProvider,
    private router: Router
  ) {
    this.quarter$ = this.boilerSalesProvider.quarter$;
    this.boilerSalesData$ = this.boilerSalesProvider.boilerSalesData$;
  }

  onSubmit() {
    this.boilerSalesProvider.addQuarterlyData();
    this.router.navigate(['manufacturer', 'boiler-sales', 'confirmation']);
  }
}
