// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { quarter } from './boiler-sales.model';

export interface IQuarterDue {
  quarter: quarter | null;
  dueDate: Date | null;
}
