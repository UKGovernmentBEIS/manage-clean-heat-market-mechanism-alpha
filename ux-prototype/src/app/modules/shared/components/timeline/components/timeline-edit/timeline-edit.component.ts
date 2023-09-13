// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, Input, SimpleChanges } from '@angular/core';
import * as _ from 'lodash-es';
import { IBoilerSalesEdit } from 'src/app/modules/shared/models/boiler-sales-edit.model';

@Component({
  selector: 'timeline-edit',
  templateUrl: './timeline-edit.component.html',
  styleUrls: ['./timeline-edit.component.css']
})
export class TimelineEditComponent {
  @Input() edit: IBoilerSalesEdit | undefined;
}
