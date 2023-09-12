import { IBoilerSalesData } from './boiler-sales-data.model';
import { IBoilerSalesEdit } from './boiler-sales-edit.model';
import { IBoilerSalesNote } from './boiler-sales-note.model';

export type quarter = 1 | 2 | 3 | 4 | 'annual';

export interface IBoilerSales {
  manufacturer: string | null;
  year: string | null;
  startDate: Date | null;
  endDate: Date | null;
  quarter: quarter | null;
  data: IBoilerSalesData | null;
  edits: IBoilerSalesEdit[];
  notes: IBoilerSalesNote[];
  status: string | null;
}
