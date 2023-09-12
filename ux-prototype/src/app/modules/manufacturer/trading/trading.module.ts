import { NgModule } from '@angular/core';
import { TradingRoutingModule } from './trading.routing';
import { SharedModule } from '../../shared/shared.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LedgerComponent } from './components/ledger/ledger.component';
import { TradingProvider } from './providers/trading.provider';

@NgModule({
  imports: [TradingRoutingModule, SharedModule],
  declarations: [LedgerComponent, ContactsComponent],
  providers: [TradingProvider],
  exports: [],
})
export class TradingModule {}
