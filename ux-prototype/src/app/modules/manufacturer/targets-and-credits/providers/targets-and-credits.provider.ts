import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Obligation } from '../models/obligation';
import {
  Input,
  NOT_MEETING_OBLIGATION,
  MEETING_OBLIGATION,
  NO_OBLIGATION,
  NO_TARGET,
  BEFORE_CARRY_OVER,
} from './targets-and-credits.inputs';

@Injectable({
  providedIn: 'root',
})
export class TargetCreditProvider {
  private readonly obligation: BehaviorSubject<Obligation>;
  public readonly obligation$: Observable<Obligation>;

  public readonly obligationPercentage = 6;
  public readonly hybridMultiplier = 0.5;
  public readonly nonHybridMultiplier = 1;

  private readonly states: Record<number, Obligation> = {
    1: this.calculateObligation(NOT_MEETING_OBLIGATION),
    2: this.calculateObligation(MEETING_OBLIGATION),
    3: this.calculateObligation(NO_OBLIGATION),
    4: this.calculateObligation(NO_TARGET),
    5: this.calculateObligation(BEFORE_CARRY_OVER),
  };

  private calculateObligation(input: Input): Obligation {
    const totalSales =
      input.boilerSales && input.boilerSales.above
        ? input.boilerSales.oil + input.boilerSales.gas
        : 0;
    const totalSalesObligation = totalSales * (this.obligationPercentage / 100);
    const obligation = totalSalesObligation + input.carryOver.obligation;
    const installs =
      input.heatPumps.hybrid * this.hybridMultiplier +
      input.heatPumps.nonHybrid * this.nonHybridMultiplier;
    const credits =
      installs + input.carryOver.credits + input.trades.in - input.trades.out;
    return {
      credits: credits,
      obligation: obligation,
      met: credits >= obligation,
      difference: Math.abs(credits - obligation),
      oil: input.boilerSales ? input.boilerSales.oil : 0,
      gas: input.boilerSales ? input.boilerSales.gas : 0,
      salesReported: !!input.boilerSales,
      totalSales: totalSales,
      totalSalesObligation: totalSalesObligation,
      carryOverObligation: input.carryOver.obligation,
      carryOverCredits: input.carryOver.credits,
      nonHybrid: input.heatPumps.nonHybrid,
      hybrid: input.heatPumps.hybrid,
      tradedIn: input.trades.in,
      tradedOut: input.trades.out,
      totalInstalls: installs,
    };
  }

  public constructor() {
    this.obligation = new BehaviorSubject<Obligation>(this.states[1]);
    this.obligation$ = this.obligation.asObservable();
  }

  public setState(state: number) {
    this.obligation.next(this.states[state]);
  }
}
