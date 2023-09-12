import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountProvider } from '../../providers/account.provider';
import { Account } from '../../models/account';

@Component({
  selector: 'account-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css'],
})
export class AccountCompleteComponent {
  public readonly account$: Observable<Account>;

  public constructor(accountProvider: AccountProvider) {
    this.account$ = accountProvider.account$;
  }
}
