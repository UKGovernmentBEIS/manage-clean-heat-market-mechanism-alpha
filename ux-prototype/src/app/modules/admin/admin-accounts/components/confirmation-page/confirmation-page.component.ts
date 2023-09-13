// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ILink } from 'src/app/modules/shared/models/link.model';
import { IPanel } from 'src/app/modules/shared/models/panel.model';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';

@Component({
  selector: 'confirmation-page',
  templateUrl: './confirmation-page.component.html',
})
export class ConfirmationPageComponent {
  panel$: Observable<IPanel>;

  whatNextBody =
    'The user will be notified about the update by email.';
  links: Partial<ILink>[] = [
    {
      route: '/admin/admin-accounts/',
      name: 'Back to admin accounts',
    },
    {
      route: '/admin/',
      name: 'Back to dashboard',
    },
  ];

  constructor(private adminUserProvder: AdminUserProvider) {
    this.panel$ = this.adminUserProvder.user$.pipe(
      map((user) => {
        return {
          title: `User: ${user?.name}`,
          body: 'User details have been successfully submitted',
        };
      })
    );
  }
}


