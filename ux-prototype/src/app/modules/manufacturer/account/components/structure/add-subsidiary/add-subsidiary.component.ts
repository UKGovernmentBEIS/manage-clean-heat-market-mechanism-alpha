// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountProvider } from '../../../providers/account.provider';
import { Account } from '../../../models/account';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { StructureSubsidiary } from '../../../models/structure';

@Component({
  selector: 'account-structure-add-subsidiary',
  templateUrl: './add-subsidiary.component.html',
  styleUrls: ['./add-subsidiary.component.css'],
})
export class StructureAddSubsidiaryComponent implements OnInit {
  public readonly account$: Observable<Account>;

  public addSubsidiaryForm: FormGroup<StructureSubsidiary> | null = null;

  public constructor(
    private router: Router,
    private accountProvider: AccountProvider
  ) {
    this.account$ = accountProvider.account$;
  }

  ngOnInit(): void {
    this.addSubsidiaryForm = new FormGroup<StructureSubsidiary>({
      name: new FormControl<string | null>(''),
      number: new FormControl<string | null>(''),
      nominated: new FormControl<boolean | null>(false),
    });
  }

  public continue() {
    this.accountProvider.addSubsidiary(this.addSubsidiaryForm?.controls!);
    this.back();
  }

  public back() {
    this.router.navigate(['manufacturer', 'account', 'structure', 'overview']);
  }
}
