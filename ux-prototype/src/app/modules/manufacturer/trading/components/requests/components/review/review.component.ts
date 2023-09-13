// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component } from '@angular/core';
import { TradingProvider } from '../../../../providers/trading.provider';
import { TradeRequest } from '../../../../models/trade-request';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'trading-requests-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  public readonly reviewRequest$: Observable<TradeRequest | null>;

  public reviewing: boolean = true;
  public approved: boolean = false;

  public constructor(
    private router: Router,
    private tradingProvider: TradingProvider
  ) {
    this.reviewRequest$ = this.tradingProvider.reviewRequest$;
  }

  public approve(request: TradeRequest) {
    this.tradingProvider.approveRequest(request.id);
    this.reviewing = false;
    this.approved = true;
  }

  public reject(request: TradeRequest) {
    this.tradingProvider.rejectRequest(request.id);
    this.back();
  }

  public back() {
    this.router.navigate(['manufacturer', 'trading', 'requests']);
  }
}
