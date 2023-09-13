// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountProvider } from '../../../providers/account.provider';
import { Account } from '../../../models/account';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { StructureGuardQuestion } from '../../../models/structure';

@Component({
  selector: 'account-structure-guard-question',
  templateUrl: './guard-question.component.html',
  styleUrls: ['./guard-question.component.css'],
})
export class StructureGuardQuestionComponent {
  public readonly account$: Observable<Account>;

  public constructor(private router: Router, accountProvider: AccountProvider) {
    this.account$ = accountProvider.account$;
  }

  public continue(form: FormGroup<StructureGuardQuestion>) {
    if (form.value.hasSubsidiaries == 'Yes') {
      this.router.navigate([
        'manufacturer',
        'account',
        'structure',
        'overview',
      ]);
    } else {
      this.router.navigate(['manufacturer', 'account', 'users']);
    }
  }

  public back() {
    this.router.navigate(['manufacturer', 'account', 'basic-details']);
  }
}
