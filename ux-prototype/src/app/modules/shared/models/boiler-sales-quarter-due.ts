import { quarter } from './boiler-sales.model';

export interface IQuarterDue {
  quarter: quarter | null;
  dueDate: Date | null;
}
