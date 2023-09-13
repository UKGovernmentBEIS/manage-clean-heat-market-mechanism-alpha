// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Manufacturer, ManufacturerApproval } from '../models/manufacturer';
import { MANUFACTURERS } from '../test-data/manufacturers.data';
import { cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class AdminAccountProvider {
  private readonly _manufacturers = cloneDeep(MANUFACTURERS);
  private readonly manufacturers = new BehaviorSubject<Manufacturer[]>(
    this._manufacturers
  );
  public readonly manufacturers$ = this.manufacturers.asObservable();

  public create(manufacturer: Pick<Manufacturer, 'name' | 'user'>) {
    const id = 1 + Math.max(...this._manufacturers.map((m) => m.id));
    this._manufacturers.push({
      id: id,
      name: manufacturer.name,
      status: 'Pending',
      requiresReview: false,
      user: manufacturer.user,
      approval: null,
      retirement: null,
    });
    this.manufacturers.next(this._manufacturers);
  }

  public approve(id: number, approval: ManufacturerApproval) {
    const manufacturer = this._manufacturers.find((m) => m.id == id);
    if (!manufacturer) return;
    manufacturer.requiresReview = false;
    manufacturer.status = 'Active';
    manufacturer.approval = approval;
    this.manufacturers.next(this._manufacturers);
  }

  public retire(id: number, retirement: ManufacturerApproval) {
    const manufacturer = this._manufacturers.find((m) => m.id == id);
    if (!manufacturer) return;
    manufacturer.requiresReview = false;
    manufacturer.status = 'Retired';
    manufacturer.retirement = retirement;
    this.manufacturers.next(this._manufacturers);
  }
}
