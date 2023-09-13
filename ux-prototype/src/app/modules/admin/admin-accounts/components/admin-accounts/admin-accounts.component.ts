// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser, IViewUser } from 'src/app/modules/shared/models/user.model';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';

@Component({
  selector: 'accounts',
  templateUrl: './admin-accounts.component.html',
})
export class AdminAccountsComponent {
  colours: Record<string, string> = {
    Active: 'green',
    Archived: 'red',
  };
  users$: Observable<IViewUser[]>;
  constructor(private adminUserProvder: AdminUserProvider) {
    this.users$ = this.adminUserProvder.users$.pipe(
      map((users) => {
        return users.map(u => {
          return {
            ...u,
            statusColour: this.colours[u.status]
          }
        });
      }
      ));
  }

  onView(user: IViewUser) {
    this.adminUserProvder.setUser(user.id);
  }

  newUser(){
    this.adminUserProvder.newUser()
  }
}


