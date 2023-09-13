// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { AccountProvider } from '../../providers/account.provider';

@Component({
  selector: 'account-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
})
export class AccountViewDetailsComponent {
  public readonly account$: Observable<Account>;

  public constructor(accountProvider: AccountProvider) {
    this.account$ = accountProvider.account$;
  }
}
