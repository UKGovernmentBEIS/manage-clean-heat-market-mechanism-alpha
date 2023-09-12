import { Component } from '@angular/core';
import { TradingProvider } from '../../../../providers/trading.provider';
import { TradeRequest } from '../../../../models/trade-request';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'trading-requests-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  public readonly requests$: Observable<TradeRequest[]>;

  public constructor(
    private router: Router,
    private tradingProvider: TradingProvider
  ) {
    this.requests$ = this.tradingProvider.requests$;
  }

  public review(request: TradeRequest) {
    this.tradingProvider.setReviewRequest(request);
    this.router.navigate(['manufacturer', 'trading', 'requests', 'review']);
  }
}
