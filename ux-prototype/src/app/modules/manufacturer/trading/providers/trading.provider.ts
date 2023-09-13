// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateTradeRequestCommand, TradeRequest } from '../models/trade-request';
import { DEFAULT_TRADE_REQUESTS } from '../test-data/trade-requests.data';
import { cloneDeep } from 'lodash-es';
import { Balance } from '../models/balance';
import { DEFAULT_BALANCE } from '../test-data/balance.data';

@Injectable({
  providedIn: 'root',
})
export class TradingProvider {
  private readonly _balance = cloneDeep(DEFAULT_BALANCE);
  private readonly _requests = cloneDeep(DEFAULT_TRADE_REQUESTS);
  private readonly balance = new BehaviorSubject<Balance>(this._balance);
  private readonly requests = new BehaviorSubject<TradeRequest[]>(
    this._requests
  );
  private readonly reviewRequest = new BehaviorSubject<TradeRequest | null>(
    null
  );
  public readonly balance$ = this.balance.asObservable();
  public readonly requests$ = this.requests.asObservable();
  public readonly reviewRequest$ = this.reviewRequest.asObservable();

  public createRequest(partial: CreateTradeRequestCommand): string {
    const request: TradeRequest = {
      id: `${Math.floor(Math.random() * 100_000 + 50_000)}`,
      date: new Date(),
      requestedBy: 'US',
      approved: false,
      rejected: false,
      ...partial,
    };
    this._requests.push(request);
    this.requests.next(this._requests);
    return request.id;
  }

  public approveRequest(id: string) {
    const request = this._requests.find((c) => c.id == id);
    if (request) {
      request.approved = true;
      if (request.requestedBy == 'US') {
        this._balance.balance -= request.credits;
      } else {
        this._balance.balance += request.credits;
      }
      this._balance.excess = this._balance.balance - this._balance.obligation;
      this.balance.next(this._balance);
    }
    this.requests.next(this._requests);
  }

  public rejectRequest(id: string) {
    const request = this._requests.find((c) => c.id == id);
    if (request) {
      request.rejected = true;
    }
    this.requests.next(this._requests);
  }

  public setReviewRequest(request: TradeRequest) {
    this.reviewRequest.next(request);
  }
}
