import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoilerSales } from 'src/app/modules/shared/models/boiler-sales.model';
import { Router } from '@angular/router';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';
import { IBoilerSalesData } from 'src/app/modules/shared/models/boiler-sales-data.model';
import { ILink } from 'src/app/modules/shared/models/link.model';

@Component({
  selector: 'boiler-sales-edit',
  templateUrl: './boiler-sales-edit.component.html',
})
export class BoilerSalesEditComponent {
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
    this.boilerSales$ = boilerSalesProvider.quarterlySalesForManufacturer$;
  }

  onSubmit(boilerSalesData: IBoilerSalesData) {
    this.boilerSalesProvider.updateQuarterlySalesForManufacturer(
      boilerSalesData
    );
    this.router.navigate(['admin', 'boiler-sales', 'review']);
  }

  onCancel(event: any) {
    this.router.navigate(['admin', 'boiler-sales', 'review']);
  }
}
