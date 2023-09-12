import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountProvider } from '../../providers/account.provider';
import { Account } from '../../models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'account-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css'],
})
export class BasicDetailsComponent {
  public readonly account$: Observable<Account>;

  public constructor(private router: Router, accountProvider: AccountProvider) {
    this.account$ = accountProvider.account$;
  }

  public continue() {
    this.router.navigate([
      'manufacturer',
      'account',
      'structure',
      'guard-question',
    ]);
  }
}
