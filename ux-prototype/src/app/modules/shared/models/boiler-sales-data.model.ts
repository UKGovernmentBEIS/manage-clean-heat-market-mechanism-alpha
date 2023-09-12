import { IFile } from './file.model';

export interface IBoilerSalesData {
  oil: number | null;
  gas: number | null;
  files: IFile[];
}
