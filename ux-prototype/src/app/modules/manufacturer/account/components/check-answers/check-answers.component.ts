// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Account } from '../../models/account';
import { AccountProvider } from '../../providers/account.provider';

@Component({
  selector: 'account-check-answers',
  templateUrl: './check-answers.component.html',
  styleUrls: ['./check-answers.component.css'],
})
export class AccountCheckAnswersComponent {
  public readonly account$: Observable<Account>;

  public constructor(
    private router: Router,
    private accountProvider: AccountProvider
  ) {
    this.account$ = accountProvider.account$;
  }

  public continue() {
    this.router.navigate(['manufacturer', 'account', 'complete']);
  }

  public back() {
    this.router.navigate(['manufacturer', 'account', 'users']);
  }
}
