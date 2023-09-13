// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, Input } from '@angular/core';
import { IBoilerSalesEdit } from '../../models/boiler-sales-edit.model';
import { IBoilerSalesNote } from '../../models/boiler-sales-note.model';
import * as _ from 'lodash-es';
import * as moment from 'moment';

@Component({
  selector: 'timeline-list',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  @Input() notes: IBoilerSalesNote[] = [];
  @Input() edits: IBoilerSalesEdit[] = [];

  sortedData: TimelineData[] = [];

  constructor() { }

  ngOnInit() {
    let data:TimelineData[] = _.map(this.notes, data => { return { date: data.date, note: data, edit: null}});
    _.map(this.edits, data => { return { date: data.date, edit: data, note: null}}).forEach(d => data.push(d));

    data = _.sortBy(data, (d) => moment(d.date, 'DD/MM/YYYY'));
    this.sortedData = data;
  }
}

class TimelineData {
  date: string = "";
  note: IBoilerSalesNote | null = null;
  edit: IBoilerSalesEdit | null = null;
}
