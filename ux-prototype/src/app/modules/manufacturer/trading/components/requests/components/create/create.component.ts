// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { ContactsProvider } from '../../../../providers/contacts.provider';
import { Observable } from 'rxjs';
import { Contact } from '../../../../models/contact';
import { Router } from '@angular/router';
import { TradingProvider } from '../../../../providers/trading.provider';

@Component({
  selector: 'trading-requests-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  public readonly contacts$: Observable<Contact[]>;

  public isEnteringData: boolean = true;
  public isCheckingData: boolean = false;
  public hasSavedData: boolean = false;

  public manufacturer: string = '';
  public credits: number | null = null;

  public id: string = '';

  public constructor(
    private router: Router,
    private tradingProvider: TradingProvider,
    contactsProvider: ContactsProvider
  ) {
    this.contacts$ = contactsProvider.contacts$;
  }

  public check() {
    this.isEnteringData = false;
    this.isCheckingData = true;
  }

  public back() {
    this.router.navigate(['manufacturer', 'trading', 'requests']);
  }

  public change() {
    this.isEnteringData = true;
    this.isCheckingData = false;
  }

  public save() {
    this.isCheckingData = false;
    this.hasSavedData = true;
    this.id = this.tradingProvider.createRequest({
      manufacturer: this.manufacturer,
      credits: this.credits!,
    });
  }
}
