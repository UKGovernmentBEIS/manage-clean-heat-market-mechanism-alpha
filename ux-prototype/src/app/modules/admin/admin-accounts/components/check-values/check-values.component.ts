// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/modules/shared/models/user.model';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';

@Component({
  selector: 'check-values',
  templateUrl: './check-values.component.html',
})
export class CheckValuesComponent {
  user$: Observable<IUser | null>;

  constructor(private adminUserProvder: AdminUserProvider,
    private router: Router) {
    this.user$ = this.adminUserProvder.user$.pipe(map((user) => {
      if (!user) {
        return null;
      }
      return user;
    }));
  }

  onSubmit(user: IUser) {
    this.adminUserProvder.updateUser(user);
    this.router.navigate(['admin', 'admin-accounts', 'confirmation']);
  }

  onCancel(event: any) {
    this.router.navigate(['admin', 'admin-accounts', 'confirmation']);
  }
}


