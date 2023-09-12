import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BoilerSalesProvider } from '../../../../shared/providers/boiler-sales.provider';
import {
  IBoilerSales,
  quarter,
} from 'src/app/modules/shared/models/boiler-sales.model';
import { IQuarterDue } from 'src/app/modules/shared/models/boiler-sales-quarter-due';
import { ILink } from 'src/app/modules/shared/models/link.model';

@Component({
  selector: 'boiler-sales',
  templateUrl: './boiler-sales.component.html',
  styleUrls: ['./boiler-sales.component.css'],
})
export class BoilerSalesComponent implements OnInit {
  year = this.boilerSalesProvider.year;
  links: Partial<ILink>[] = [
    {
      route: '/home',
      name: 'Home',
    },
  ];
  boilerSales$: Observable<IBoilerSales[]>;
  quartersSumGrand$: Observable<number | null>;
  quartersSumOil$: Observable<number | null>;
  quartersSumGas$: Observable<number | null>;
  quarterDue$: Observable<IQuarterDue | null>;

  constructor(
    private boilerSalesProvider: BoilerSalesProvider,
    private router: Router
  ) {
    this.boilerSales$ = this.boilerSalesProvider.boilerSalesForManufacturer$;
    this.quartersSumGrand$ = this.boilerSalesProvider.boilerSalesFigures$.pipe(
      map((f) => f.sumGrand)
    );
    this.quartersSumOil$ = this.boilerSalesProvider.boilerSalesFigures$.pipe(
      map((f) => f.sumOil)
    );
    this.quartersSumGas$ = this.boilerSalesProvider.boilerSalesFigures$.pipe(
      map((f) => f.sumGas)
    );
    this.quarterDue$ = this.boilerSalesProvider.quarterDue$;
  }

  ngOnInit() {
    this.boilerSalesProvider.calculateBoilerSalesFigures();
    this.boilerSalesProvider.setQuarterDue();
  }

  addQuarter(quarter: quarter) {
    this.boilerSalesProvider.setQuarter(quarter);
    this.router.navigate(['manufacturer', 'boiler-sales', 'add']);
  }
}
