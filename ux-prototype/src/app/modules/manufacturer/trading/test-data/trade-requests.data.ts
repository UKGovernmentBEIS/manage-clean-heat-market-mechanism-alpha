// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { TradeRequest } from '../models/trade-request';

const DEFAULT_TRADE_REQUESTS: TradeRequest[] = [
  {
    id: '54321',
    manufacturer: 'Wonka Industries',
    date: new Date('2023-08-10T10:32:00'),
    credits: 100,
    requestedBy: 'THEM',
    approved: false,
    rejected: false
  },
  {
    id: '54322',
    manufacturer: 'Acme Corp',
    date: new Date('2023-08-10T12:42:00'),
    credits: 200,
    requestedBy: 'THEM',
    approved: false,
    rejected: false
  },
  {
    id: '54323',
    manufacturer: 'Stark Industries',
    date: new Date('2023-08-10T11:06:00'),
    credits: 300,
    requestedBy: 'US',
    approved: false,
    rejected: false
  },
  {
    id: '54324',
    manufacturer: 'Wayne Enterprises',
    date: new Date('2023-07-12T11:27:00'),
    credits: 60,
    requestedBy: 'US',
    approved: true,
    rejected: false
  },
  {
    id: '54325',
    manufacturer: 'Stark Industries',
    date: new Date('2023-07-16T16:21:00'),
    credits: -50,
    requestedBy: 'THEM',
    approved: true,
    rejected: false
  },
];

export { DEFAULT_TRADE_REQUESTS };
