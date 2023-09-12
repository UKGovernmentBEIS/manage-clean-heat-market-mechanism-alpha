export interface Obligation {
  credits: number;
  obligation: number;
  met: boolean;
  difference: number;
  gas: number;
  oil: number;
  salesReported: boolean;
  totalSales: number;
  totalSalesObligation: number;
  carryOverObligation: number;
  nonHybrid: number;
  hybrid: number;
  totalInstalls: number;
  tradedIn: number;
  tradedOut: number;
  carryOverCredits: number;
}
