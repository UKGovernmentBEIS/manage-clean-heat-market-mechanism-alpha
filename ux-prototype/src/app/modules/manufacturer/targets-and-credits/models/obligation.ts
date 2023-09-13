// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
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
