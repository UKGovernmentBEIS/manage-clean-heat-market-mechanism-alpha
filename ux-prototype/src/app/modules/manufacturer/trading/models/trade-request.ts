// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
export interface TradeRequest {
  id: string;
  date: Date;
  requestedBy: 'US' | 'THEM';
  approved: boolean;
  rejected: boolean;
  manufacturer: string;
  credits: number;
}

export type CreateTradeRequestCommand = Pick<
  TradeRequest,
  'manufacturer' | 'credits'
>;
