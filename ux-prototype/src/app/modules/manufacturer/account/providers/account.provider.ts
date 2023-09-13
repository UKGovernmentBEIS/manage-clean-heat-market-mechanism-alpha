// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EXISTING_ACCOUNT, NEW_ACCOUNT } from '../test-data/account.data';
import { Account } from '../models/account';
import { StructureSubsidiary } from '../models/structure';
import { cloneDeep } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class AccountProvider {
  private account = new BehaviorSubject<Account>(cloneDeep(NEW_ACCOUNT));
  public account$ = this.account.asObservable();

  public constructor() {}

  public useExisting() {
    this.account.next(cloneDeep(EXISTING_ACCOUNT));
  }

  public useNew() {
    this.account.next(cloneDeep(NEW_ACCOUNT));
  }

  public addSubsidiary(subsidiary: StructureSubsidiary) {
    this.account.value.structure.value.subsidiaries?.push(subsidiary);
  }
}
