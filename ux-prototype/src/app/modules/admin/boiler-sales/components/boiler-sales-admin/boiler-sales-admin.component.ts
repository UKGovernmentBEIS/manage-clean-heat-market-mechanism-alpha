// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';
import * as _ from 'lodash-es';

@Component({
  selector: 'home',
  templateUrl: './boiler-sales-admin.component.html',
})
export class BoilerSalesAdminComponent {
  data$: Observable<ISalesReview[]>;
  colours: Record<string, string> = {
    Reviewed: 'green',
    'For Review': 'blue',
    Due: 'red',
    'N/A': 'grey',
  };

  onView(manufacturer: string | null) {
    this.boilerSalesProvider.setManufacturer(manufacturer);
  }

  constructor(private boilerSalesProvider: BoilerSalesProvider) {
    this.data$ = this.boilerSalesProvider.boilerSales$.pipe(
      map((sales) => {
        const data: ISalesReview[] = [];
        sales.forEach((element) => {
          if (!_.find(data, { manufacturer: element.manufacturer })) {
            data.push({
              manufacturer: element.manufacturer,
              q1: 'N/A',
              q2: 'N/A',
              q3: 'Due', // Hard coding current
              q4: 'N/A',
              q1Colour: 'grey',
              q2Colour: 'grey',
              q3Colour: 'red', // Hard coding current
              q4Colour: 'grey',
              annual: 'N/A',
              annualColour: 'grey',
            });
          }

          let index = _.findIndex(data, { manufacturer: element.manufacturer });

          const colour = this.colours[element.status || 'N/A'];
          switch (element.quarter) {
            case 1: {
              data[index].q1 = element.status;
              data[index].q1Colour = colour;
              break;
            }
            case 2: {
              data[index].q2 = element.status;
              data[index].q2Colour = colour;
              break;
            }
            case 3: {
              data[index].q3 = element.status;
              data[index].q3Colour = colour;
              break;
            }
            case 4: {
              data[index].q4 = element.status;
              data[index].q4Colour = colour;
              break;
            }
          }
        });
        return data;
      })
    );
  }
}

interface ISalesReview {
  manufacturer: string | null;
  q1: string | null;
  q2: string | null;
  q3: string | null;
  q4: string | null;
  q1Colour: string | null;
  q2Colour: string | null;
  q3Colour: string | null;
  q4Colour: string | null;
  annual: string | null;
  annualColour: string | null;
}
