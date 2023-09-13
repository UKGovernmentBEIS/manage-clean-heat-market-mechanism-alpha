// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Injectable } from '@angular/core';
import { IBoilerSales } from '../models/boiler-sales.model';
import { BehaviorSubject, map } from 'rxjs';
import { IBoilerSalesData } from '../models/boiler-sales-data.model';
import { cloneDeep, merge } from 'lodash-es';
import * as moment from 'moment';
import { quarter } from 'src/app/modules/shared/models/boiler-sales.model';
import { IBoilerSalesFigure } from '../models/boiler-sales-figures.model';
import { IQuarterDue } from '../models/boiler-sales-quarter-due';

@Injectable({
  providedIn: 'root',
})
export class BoilerSalesProvider {
  year = '2023';
  now = moment();

  private user = new BehaviorSubject<string | null>('Joe Bloggs');
  user$ = this.user.asObservable();

  private quarter = new BehaviorSubject<quarter | null>(1);
  quarter$ = this.quarter.asObservable();

  private manufacturer = new BehaviorSubject<string | null>(null);
  manufacturer$ = this.manufacturer.asObservable();

  private isAdmin = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdmin.asObservable();

  private boilerSales = new BehaviorSubject<IBoilerSales[]>([]);
  boilerSales$ = this.boilerSales.asObservable();
  boilerSalesForManufacturer$ = this.boilerSales.pipe(
    map((sales) =>
      sales.filter((s) => s.manufacturer == this.manufacturer.value)
    )
  );

  quarterlySalesDefault = {
    data: {
      oil: null,
      gas: null,
      files: [],
    },
    edits: [],
    notes: [],
    status: 'Due',
  };
  private quarterlySalesForManufacturer =
    new BehaviorSubject<IBoilerSales | null>(null);
  quarterlySalesForManufacturer$ =
    this.quarterlySalesForManufacturer.asObservable();

  boilerSalesDataDefault = {
    oil: null,
    gas: null,
    files: [],
  };
  private boilerSalesData = new BehaviorSubject<IBoilerSalesData>(
    this.boilerSalesDataDefault
  );
  boilerSalesData$ = this.boilerSalesData.asObservable();

  boilerSalesFiguresDefault = {
    sumOil: null,
    sumGas: null,
    sumGrand: null,
  };
  private boilerSalesFigures = new BehaviorSubject<IBoilerSalesFigure>(
    this.boilerSalesFiguresDefault
  );
  boilerSalesFigures$ = this.boilerSalesFigures.asObservable();

  private quarterDue = new BehaviorSubject<IQuarterDue | null>({
    quarter: null,
    dueDate: null,
  });
  quarterDue$ = this.quarterDue.asObservable();

  constructor() {
    //this.now.add(1, 'y');
  }

  setAdmin(isAdmin: boolean) {
    this.isAdmin.next(isAdmin);
  }

  setQuarter(quarter: quarter) {
    this.quarter.next(quarter);
  }

  setManufacturer(manufacturer: string | null) {
    this.manufacturer.next(manufacturer);
  }

  setQuarterlySalesForManufacturer(quarter: quarter) {
    this.quarter.next(quarter);

    const quarterlySales = this.boilerSales.value.find(
      (sales) =>
        sales.quarter === quarter &&
        sales.manufacturer === this.manufacturer.value
    );

    this.quarterlySalesForManufacturer.next(
      cloneDeep(quarterlySales) ??
        merge(
          {
            manufacturer: this.manufacturer.value,
            year: this.year,
            quarter: this.quarter.value,
            startDate: null,
            endDate: null,
          },
          this.quarterlySalesDefault
        )
    );
  }

  updateQuarterlySalesForManufacturer(data: IBoilerSalesData) {
    const quarterlySales = this.quarterlySalesForManufacturer.value!;
    this.quarterlySalesForManufacturer.next(
      merge(quarterlySales, {
        data: cloneDeep(data),
        edits: [
          ...quarterlySales.edits,
          {
            editor: this.user.value,
            date: moment().format('DD/MM/YYYY HH:mm'),
            previousData: cloneDeep(quarterlySales.data),
            updatedData: cloneDeep(data),
          },
        ],
      })
    );
  }

  addNote(text: string) {
    const quarterlySales = this.quarterlySalesForManufacturer.value!;
    this.quarterlySalesForManufacturer.next(
      merge(quarterlySales, {
        notes: [
          ...quarterlySales.notes,
          {
            author: this.user.value,
            date: moment().format('DD/MM/YYYY HH:mm'),
            text: text,
          },
        ],
      })
    );
  }

  updateBoilerSales() {
    const quarterlySales = cloneDeep(this.quarterlySalesForManufacturer.value!);
    quarterlySales.status = 'Reviewed';

    const boilerSales = cloneDeep(this.boilerSales.value);
    const idx = boilerSales.findIndex(
      (s) =>
        s.manufacturer === quarterlySales.manufacturer &&
        s.quarter === quarterlySales.quarter
    );
    if (idx !== -1) {
      boilerSales[idx] = quarterlySales;
    } else {
      boilerSales.push(quarterlySales);
    }
    this.boilerSales.next(boilerSales);
  }

  setBoilerSales(boilerSales: IBoilerSales[]) {
    this.boilerSales.next(cloneDeep(boilerSales));
  }

  clearAdminWorkData() {
    this.clearCommonData();
    this.quarterlySalesForManufacturer.next(null);
  }

  clearManufacturerData() {
    this.clearCommonData();
    this.boilerSalesData.next(cloneDeep(this.boilerSalesDataDefault));
    this.boilerSalesFigures.next(cloneDeep(this.boilerSalesFiguresDefault));
    this.quarterDue.next(null);
  }

  clearCommonData() {
    this.quarter.next(null);
    this.manufacturer.next(null);
    this.boilerSales.next([]);
  }

  // Manufacturer
  setBoilerSalesData(boilerSalesData: IBoilerSalesData) {
    this.boilerSalesData.next(cloneDeep(boilerSalesData));
  }

  resetBoilerSalesData() {
    this.boilerSalesData.next(cloneDeep(this.boilerSalesDataDefault));
  }

  addQuarterlyData() {
    const boilerSales = cloneDeep(this.boilerSales.value);
    const idx = boilerSales.findIndex((s) => s.quarter === this.quarter.value);
    if (idx !== -1) {
      boilerSales[idx].data = cloneDeep(this.boilerSalesData.value);
      boilerSales[idx].status = 'Submitted';
    }
    this.boilerSales.next(boilerSales);
    this.setQuarterDue();
  }

  calculateBoilerSalesFigures() {
    let boilerSales = this.boilerSales.value;

    let sumOil = boilerSales
      .map((x) => x.data?.oil || 0)
      .reduce((a, b) => a + b, 0);

    let sumGas = boilerSales
      .map((x) => x.data?.gas || 0)
      .reduce((a, b) => a + b, 0);

    this.boilerSalesFigures.next({
      sumOil: sumOil,
      sumGas: sumGas,
      sumGrand: sumOil + sumGas,
    });
  }

  setQuarterDue() {
    let due = cloneDeep(this.boilerSales.value.find((x) => x.status == 'Due'));
    if (!!due) {
      this.quarterDue.next({
        quarter: due.quarter,
        dueDate: due.endDate,
      });
    } else {
      this.quarterDue.next(null);
    }
  }
}
