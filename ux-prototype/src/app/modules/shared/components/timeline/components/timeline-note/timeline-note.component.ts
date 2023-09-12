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
