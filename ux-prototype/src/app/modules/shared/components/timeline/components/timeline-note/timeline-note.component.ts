// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, Input, SimpleChanges } from '@angular/core';
import { IBoilerSalesNote } from '../../../../models/boiler-sales-note.model';
import * as _ from 'lodash-es';

@Component({
  selector: 'timeline-note',
  templateUrl: './timeline-note.component.html',
})
export class TimelineNoteComponent {
  @Input() note: IBoilerSalesNote | undefined;
}
