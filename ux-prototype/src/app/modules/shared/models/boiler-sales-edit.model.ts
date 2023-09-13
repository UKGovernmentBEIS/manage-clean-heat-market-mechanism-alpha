// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { IBoilerSalesData } from './boiler-sales-data.model';

export interface IBoilerSalesEdit {
  editor: string;
  date: string;
  previousData: IBoilerSalesData;
  updatedData: IBoilerSalesData;
}
