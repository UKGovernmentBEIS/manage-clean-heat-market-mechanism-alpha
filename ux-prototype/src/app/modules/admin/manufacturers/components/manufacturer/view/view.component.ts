// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manufacturer } from '../../../models/manufacturer';
import { Subscription, combineLatest } from 'rxjs';
import { AdminAccountProvider } from '../../../providers/account.provider';

@Component({
  selector: 'manufacturers-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ManufacturersViewComponent implements OnInit, OnDestroy {
  public manufacturer: Manufacturer | undefined;

  private subscription: Subscription | undefined;

  public constructor(
    private route: ActivatedRoute,
    private accountProvider: AdminAccountProvider
  ) {}

  public ngOnInit() {
    this.subscription = combineLatest({
      params: this.route.params,
      manufacturers: this.accountProvider.manufacturers$,
    }).subscribe((result) => {
      const id = +result.params['id'];
      this.manufacturer = result.manufacturers.find((m) => m.id == id);
    });
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
