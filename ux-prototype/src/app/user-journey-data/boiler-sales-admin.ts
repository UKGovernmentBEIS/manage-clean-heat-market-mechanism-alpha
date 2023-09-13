// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { IBoilerSales } from '../modules/shared/models/boiler-sales.model';

export default function BoilerSalesAdminData(): IBoilerSales[] {
  return [
    {
      manufacturer: 'Test manufacturer',
      year: '2023',
      quarter: 1,
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-03-31'),
      data: {
        oil: 10000,
        gas: 25000,
        files: [
          {
            name: 'Test file',
            link: 'Test link',
          },
        ],
      },
      edits: [],
      notes: [],
      status: 'Reviewed',
    },
    {
      manufacturer: 'Test manufacturer',
      year: '2023',
      quarter: 2,
      startDate: new Date('2023-04-01'),
      endDate: new Date('2023-06-30'),
      data: {
        oil: 10000,
        gas: 25000,
        files: [
          {
            name: 'Test file',
            link: 'Test link',
          },
        ],
      },
      edits: [],
      notes: [],
      status: 'For Review',
    },
    {
      manufacturer: 'Test manufacturer 2',
      year: '2023',
      quarter: 1,
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-03-31'),
      data: {
        oil: 14000,
        gas: 22000,
        files: [
          {
            name: 'Test file',
            link: 'Test link',
          },
        ],
      },
      edits: [],
      notes: [],
      status: 'Reviewed',
    },
    {
      manufacturer: 'Test manufacturer 2',
      year: '2023',
      quarter: 2,
      startDate: new Date('2023-04-01'),
      endDate: new Date('2023-06-30'),
      data: {
        oil: 40000,
        gas: 22400,
        files: [
          {
            name: 'Test file',
            link: 'Test link',
          },
        ],
      },
      edits: [],
      notes: [],
      status: 'For Review',
    },
  ];
}
