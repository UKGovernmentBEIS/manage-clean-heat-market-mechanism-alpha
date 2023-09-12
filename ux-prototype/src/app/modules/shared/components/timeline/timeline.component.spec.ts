import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as _ from 'lodash-es';
import * as moment from 'moment';
import { Component } from '@angular/core';
import { TimelineComponent } from './timeline.component';
import { TimelineNoteComponent } from './components/timeline-note/timeline-note.component';
import { TimelineEditComponent } from './components/timeline-edit/timeline-edit.component';

const timelineTestData = {
  edits: [
    { date: "03/07/2025", editor: "Me 3", previousData: { files: [], gas: 100, oil: 200 }, updatedData: { files: [], gas: 200, oil: 300 } },
    { date: "02/07/2025", editor: "Me 2", previousData: { files: [], gas: 100, oil: 200 }, updatedData: { files: [], gas: 200, oil: 300 } }
  ],
  notes: [
    { author: "Me 4", date: "04/07/2025", text: "My Last Note" },
    { author: "Me 1", date: "01/07/2025", text: "My First Note" }
  ]
};

@Component({
  template: `<timeline-list type="text" [notes]="timelineData.notes" [edits]="timelineData.edits"/>`
})
class TimelineTestComponent {
  timelineData = timelineTestData;
}

describe('component: Timeline', () => {
  let component: TimelineTestComponent;
  let fixture: ComponentFixture<TimelineTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineComponent, TimelineNoteComponent, TimelineEditComponent, TimelineTestComponent],
      teardown: { destroyAfterEach: false }
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the timeline', () => {
    expect(component).toBeTruthy();
  });

  it('should have the heading "Timeline"', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain("Timeline");
  });

  it('should have 4 rows if given two edits and two notes', () => {
    const rows = fixture.nativeElement.querySelectorAll('li');
    expect(4).toEqual(rows.length);
  });

  it('should show dates in the correct order', () => {
    const rows = fixture.nativeElement.querySelectorAll('li');

    let allDates = _.map(timelineTestData.notes, 'date');
    _.map(timelineTestData.edits, 'date').forEach(d => allDates.push(d));

    const sortedNotes = _.sortBy(allDates, date => moment(date, 'DD/MM/YYYY'));

    sortedNotes.forEach((date, index) => {
      const p = rows[index].querySelector(`[data-date="${date}"]`);
      expect(p.textContent).toContain(date);
    });
  });

  it('should show the editor for each item', () => {
    const rows = fixture.nativeElement.querySelectorAll('li');

    let allDates = _.map(timelineTestData.notes, 'author');
    _.map(timelineTestData.edits, 'editor').forEach(d => allDates.push(d));

    const sortedNotes = _.sortBy(allDates, author => author);

    sortedNotes.forEach((author, index) => {
      const p = rows[index].querySelector(`[data-author="${author}"]`);
      expect(p).toBeTruthy();
      expect(p.textContent).toContain(author);
    });
  });
});
