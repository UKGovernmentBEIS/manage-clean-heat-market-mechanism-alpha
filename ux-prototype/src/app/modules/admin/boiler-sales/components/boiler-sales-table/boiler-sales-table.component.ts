// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, Input } from '@angular/core';
import { quarter } from 'src/app/modules/shared/models/boiler-sales.model';
import { IFile } from 'src/app/modules/shared/models/file.model';

@Component({
  selector: 'boiler-sales-table',
  templateUrl: './boiler-sales-table.component.html',
})
export class BoilerSalesTableComponent {
  @Input() year: string | null = null;
  @Input() quarter: quarter | null = null;
  @Input() oil: number | null = null;
  @Input() gas: number | null = null;
  @Input() files: IFile[] = [];
}
