// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { TradingProvider } from '../../providers/trading.provider';
import { Observable } from 'rxjs';
import { Balance } from '../../models/balance';
import { TradeRequest } from '../../models/trade-request';

@Component({
  selector: 'trading-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent {
  public readonly balance$: Observable<Balance>;
  public readonly requests$: Observable<TradeRequest[]>;
  
  public constructor(tradingProvider: TradingProvider) {
    this.balance$ = tradingProvider.balance$;
    this.requests$ = tradingProvider.requests$;
  }
}
