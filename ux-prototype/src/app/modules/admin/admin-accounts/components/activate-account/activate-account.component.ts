// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/modules/shared/models/user.model';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';

@Component({
  selector: 'activate-account',
  templateUrl: './activate-account.component.html',
})
export class ActivateAccountComponent {

  constructor(private adminUserProvder: AdminUserProvider, private router: Router) { }

  onSubmit() {
    this.adminUserProvder.updateUser({ status: "Active" });
    this.router.navigate(['admin', 'admin-accounts']);

  }

  onCancel() {
    this.router.navigate(['admin', 'admin-accounts']);
  }
}


