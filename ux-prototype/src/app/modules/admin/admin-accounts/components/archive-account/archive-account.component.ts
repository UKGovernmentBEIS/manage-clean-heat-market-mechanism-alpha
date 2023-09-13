// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/modules/shared/models/user.model';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';

@Component({
  selector: 'archive-account',
  templateUrl: './archive-account.component.html',
})
export class ArchiveAccountComponent {

  constructor(private adminUserProvder: AdminUserProvider, private router: Router) { }

  onSubmit() {
    this.adminUserProvder.updateUser({ status: "Archived" });
    this.router.navigate(['admin', 'admin-accounts']);

  }

  onCancel() {
    this.router.navigate(['admin', 'admin-accounts']);
  }
}


