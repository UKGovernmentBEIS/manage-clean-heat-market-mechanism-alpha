// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';
import { BoilerSalesProvider } from '../../../../shared/providers/boiler-sales.provider';
import { IBoilerSalesData } from 'src/app/modules/shared/models/boiler-sales-data.model';
import { quarter } from 'src/app/modules/shared/models/boiler-sales.model';
import { ILink } from 'src/app/modules/shared/models/link.model';

@Component({
  selector: 'boiler-sales-add',
  templateUrl: './boiler-sales-add.component.html',
})
export class BoilerSalesAddComponent {
  links: Partial<ILink>[] = [
    {
      route: '../overview',
      name: 'Boiler Sales Data',
    },
  ];
  boilerSales$: Observable<{
    data: IBoilerSalesData | null;
    quarter: quarter | null;
  }>;

  constructor(
    private boilerSalesProvider: BoilerSalesProvider,
    private router: Router
  ) {
    this.boilerSales$ = combineLatest(
      this.boilerSalesProvider.quarter$,
      this.boilerSalesProvider.boilerSalesData$
    ).pipe(
      map(([quarter, data]) => {
        return {
          data: data,
          quarter: quarter,
        };
      })
    );
  }

  onSubmit(boilerSalesData: IBoilerSalesData) {
    this.boilerSalesProvider.setBoilerSalesData(boilerSalesData);
    this.router.navigate(['manufacturer', 'boiler-sales', 'summary']);
  }

  onCancel(event: any) {
    this.router.navigate(['manufacturer', 'boiler-sales', 'overview']);
  }
}
