// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manufacturer } from '../../../models/manufacturer';
import { Subscription, combineLatest } from 'rxjs';
import { AdminAccountProvider } from '../../../providers/account.provider';
import { IFile } from 'src/app/modules/shared/models/file.model';

@Component({
  selector: 'manufacturers-retire',
  templateUrl: './retire.component.html',
  styleUrls: ['./retire.component.css'],
})
export class ManufacturersRetireComponent implements OnInit, OnDestroy {
  public manufacturer: Manufacturer | undefined;

  private subscription: Subscription | undefined;

  public files: IFile[] = [];
  public notes: string = '';
  public retired: boolean = false;

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

  public onFileChange(event: any) {
    this.files = Array.from(event.target.files).map((file: File) => {
      return { name: file.name, link: null };
    });
  }

  public retire() {
    this.retired = true;
    if (!!this.manufacturer) {
      this.accountProvider.retire(this.manufacturer.id, {
        files: this.files,
        notes: this.notes,
      });
    }
  }
}
