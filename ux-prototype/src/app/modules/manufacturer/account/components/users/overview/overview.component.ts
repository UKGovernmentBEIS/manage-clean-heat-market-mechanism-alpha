// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountProvider } from '../../../providers/account.provider';
import { Account } from '../../../models/account';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { StructureGuardQuestion } from '../../../models/structure';
import { AccountUser } from '../../../models/user';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'account-users-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class UsersOverviewComponent {
  public readonly account$: Observable<Account>;

  private readonly emptyUserForm = new FormGroup<AccountUser>({
    firstName: new FormControl<string | null>(''),
    lastName: new FormControl<string | null>(''),
    email: new FormControl<string | null>(''),
    confirmEmail: new FormControl<string | null>(''),
    telephone: new FormControl<string | null>(''),
    jobTitle: new FormControl<string | null>(''),
    nominated: new FormControl<boolean | null>(false),
    isGeneralUser: new FormControl<boolean | null>(false),
    isAdminUser: new FormControl<boolean | null>(false),
  });

  public userForm: FormGroup<AccountUser> = cloneDeep(this.emptyUserForm);

  public isAddingUser: boolean = false;
  public isEditingUser: boolean = false;
  private editingUser: AccountUser | null = null;

  public constructor(private router: Router, accountProvider: AccountProvider) {
    this.account$ = accountProvider.account$;
  }

  public continue() {
    this.router.navigate(['manufacturer', 'account', 'check-answers']);
  }

  public makeChanges(users: AccountUser[]) {
    if (this.isAddingUser) {
      users.push(this.userForm.controls);
    } else if (this.isEditingUser) {
      const userIndex = users.findIndex(
        (u) => u.email == this.editingUser?.email
      );
      users.splice(userIndex, 1);
      users.push(this.userForm.controls);
    }
    this.backToOverview();
  }

  public addUser() {
    this.isAddingUser = true;
  }

  public editUser(user: AccountUser) {
    this.isEditingUser = true;
    this.editingUser = user;
    this.userForm = new FormGroup<AccountUser>(this.editingUser);
  }

  public deactivateUser(users: AccountUser[]) {
    const userIndex = users.findIndex(
      (u) => u.email == this.editingUser?.email
    );
    users.splice(userIndex, 1);
    this.backToOverview();
  }

  public backToOverview() {
    this.isAddingUser = false;
    this.isEditingUser = false;
    this.userForm = cloneDeep(this.emptyUserForm);
  }

  public back(structureGuardQuestion: FormGroup<StructureGuardQuestion>) {
    this.router.navigate([
      'manufacturer',
      'account',
      'structure',
      structureGuardQuestion.value.hasSubsidiaries == 'Yes'
        ? 'overview'
        : 'guard-question',
    ]);
  }
}
