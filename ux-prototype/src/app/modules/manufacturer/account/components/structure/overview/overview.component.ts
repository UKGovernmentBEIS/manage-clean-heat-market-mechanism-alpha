// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountProvider } from '../../../providers/account.provider';
import { Account } from '../../../models/account';
import { Router } from '@angular/router';
import { Structure } from '../../../models/structure';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'account-structure-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class StructureOverviewComponent {
  public readonly account$: Observable<Account>;

  public constructor(private router: Router, accountProvider: AccountProvider) {
    this.account$ = accountProvider.account$;
  }

  public continue() {
    this.router.navigate(['manufacturer', 'account', 'users']);
  }

  public onFileChange(structure: FormGroup<Structure>, event: any) {
    const files = Array.from(event.target.files).map((file: File) => {
      return { name: file.name, link: null };
    });
    structure.patchValue({ files: files });
  }

  public addSubsidiary() {
    this.router.navigate([
      'manufacturer',
      'account',
      'structure',
      'add-subsidiary',
    ]);
  }

  public back() {
    this.router.navigate([
      'manufacturer',
      'account',
      'structure',
      'guard-question',
    ]);
  }
}
