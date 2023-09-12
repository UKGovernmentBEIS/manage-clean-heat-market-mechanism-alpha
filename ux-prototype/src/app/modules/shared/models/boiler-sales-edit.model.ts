import { IBoilerSalesData } from './boiler-sales-data.model';

export interface IBoilerSalesEdit {
  editor: string;
  date: string;
  previousData: IBoilerSalesData;
  updatedData: IBoilerSalesData;
}
