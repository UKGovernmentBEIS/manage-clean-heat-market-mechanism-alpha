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
