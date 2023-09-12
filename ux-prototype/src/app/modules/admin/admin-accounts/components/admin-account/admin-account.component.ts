import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/modules/shared/models/user.model';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';

@Component({
  selector: 'account',
  templateUrl: './admin-account.component.html',
})
export class AdminAccountComponent {
  user$: Observable<IUser | null>;
  archiveOrActivate: string;
  headerText: string;

  constructor(private adminUserProvder: AdminUserProvider,
    private router: Router) {
    this.user$ = this.adminUserProvder.user$.pipe(map((user) => {
      if (!user) {
        this.headerText = 'Add user';
        return null;
      }

      this.archiveOrActivate = user.status == 'Active' ? 'Archive' : 'Activate';
      this.headerText = user.email == '' && user.name == '' ? 'Add new user' : 'Edit user';
      return user;
    }));

    this.archiveOrActivate = 'Activate';
    this.headerText = 'Add user';
  }

  onSubmit(user: IUser) {
    this.adminUserProvder.setUserForValidation(user);
    this.router.navigate(['admin', 'admin-accounts', 'check-values']);
  }

  onArchive(user: IUser) {
    this.adminUserProvder.setUserForValidation(user);
    if (user.status == "Active") {
      this.router.navigate(['admin', 'admin-accounts', 'archive-account']);
    } else if (user.status == "Archived") {
      this.router.navigate(['admin', 'admin-accounts', 'activate-account']);

    }
  }

  onCancel(event: any) {
    this.router.navigate(['admin', 'admin-accounts', 'users']);
  }
}


