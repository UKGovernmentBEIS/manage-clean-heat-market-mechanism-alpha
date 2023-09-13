// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { IFile } from './file.model';

export interface IBoilerSalesData {
  oil: number | null;
  gas: number | null;
  files: IFile[];
}
