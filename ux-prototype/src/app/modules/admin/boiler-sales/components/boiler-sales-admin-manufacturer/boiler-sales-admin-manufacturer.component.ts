// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as _ from 'lodash';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';
import * as moment from 'moment';
import { ILink } from 'src/app/modules/shared/models/link.model';
import { quarter } from 'src/app/modules/shared/models/boiler-sales.model';

@Component({
  selector: 'home',
  templateUrl: './boiler-sales-admin-manufacturer.component.html',
})
export class BoilerSalesAdminManufacturerComponent {
  manufacturer$: Observable<string | null>;
  quarterData$: Observable<IQuarterData[]>;
  links: Partial<ILink>[] = [
    {
      route: '../manufacturers',
      name: 'Manufacturers',
    },
  ];
  ytdOil: number = 0;
  ytdGas: number = 0;
  colours: Record<string, string> = {
    Reviewed: 'green',
    'For Review': 'blue',
    Due: 'red',
    'N/A': 'grey',
  };
  dates: Record<number, Date[]> = {
    1: [new Date('2023-01-01'), new Date('2023-03-31')],
    2: [new Date('2023-04-01'), new Date('2023-06-30')],
    3: [new Date('2023-07-01'), new Date('2023-09-30')],
    4: [new Date('2023-10-01'), new Date('2023-12-30')],
  };

  constructor(private boilerSalesProvider: BoilerSalesProvider) {
    this.manufacturer$ = boilerSalesProvider.manufacturer$;
    this.quarterData$ = boilerSalesProvider.boilerSalesForManufacturer$.pipe(
      map((sales) => {
        const quarterData: IQuarterData[] = [];
        [1, 2, 3, 4].forEach((q) => {
          let qData = sales.find((d) => d.quarter == q);
          let qStatus = 'N/A';
          let qStart = moment(this.dates[q][0].toDateString());
          let qEnd = moment(this.dates[q][1].toDateString())
          if (qEnd.isBefore(boilerSalesProvider.now) || boilerSalesProvider.now.isBetween(qStart, qEnd)) {
            qStatus = 'Due';
          }
          var d: IQuarterData = {
            quarter: q as quarter,
            dates: this.dates[q],
            gas: null,
            oil: null,
            status: qStatus,
            statusColour: this.colours[qStatus],
            evidence: '',
          };
          if (qData) {
            d.gas = qData.data?.gas || null;
            d.oil = qData.data?.oil || null;
            d.status = qData.status || 'N/A';
            d.statusColour = this.colours[qData.status || 'N/A'];
            d.evidence = `${qData.data?.files.length || 0} ${(qData.data?.files.length || 0) !== 1 ? 'files' : 'file'} uploaded`;

            this.ytdGas = this.ytdGas + (qData.data?.gas || 0);
            this.ytdOil = this.ytdOil + (qData.data?.oil || 0);
          }
          quarterData.push(d);
        });
        return quarterData;
      })
    );
  }

  onQuarter(quarter: quarter) {
    this.boilerSalesProvider.setQuarterlySalesForManufacturer(quarter);
  }
}

interface IQuarterData {
  quarter: quarter;
  dates: Date[];
  oil: number | null;
  gas: number | null;
  status: string;
  statusColour: string;
  evidence: string;
}
