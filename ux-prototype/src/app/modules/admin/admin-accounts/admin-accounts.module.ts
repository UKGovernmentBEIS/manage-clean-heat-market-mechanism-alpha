import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminAccountsRoutingModule } from './admin-accounts.routing';
import { AdminAccountsComponent } from './components/admin-accounts/admin-accounts.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { CheckValuesComponent } from './components/check-values/check-values.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { ArchiveAccountComponent } from './components/archive-account/archive-account.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
@NgModule({
  imports: [AdminAccountsRoutingModule, SharedModule],
  declarations: [AdminAccountsComponent, AdminAccountComponent, CheckValuesComponent, ConfirmationPageComponent, ArchiveAccountComponent, ActivateAccountComponent],
  providers: [],
  exports: [],
})
export class AdminAccountsModule { }
