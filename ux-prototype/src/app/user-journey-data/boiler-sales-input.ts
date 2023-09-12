import { IBoilerSales } from '../modules/shared/models/boiler-sales.model';

export default function BoilerSalesInputData(): IBoilerSales[] {
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
      status: 'Submitted',
    },
    {
      manufacturer: 'Test manufacturer',
      year: '2023',
      quarter: 2,
      startDate: new Date('2023-04-01'),
      endDate: new Date('2023-06-30'),
      data: {
        oil: 0,
        gas: 0,
        files: [],
      },
      edits: [],
      notes: [],
      status: 'Due',
    },
  ];
}
