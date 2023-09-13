// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as _ from 'lodash-es';
import { Component } from '@angular/core';
import { TimelineNoteComponent } from './timeline-note.component';

const noteTestData = { author: "Me 4", date: "04/07/2025", text: "My Last Note" };

@Component({
  template: `<timeline-note [note]="note"/>`
})
class TimelineNoteTestComponent {
  note = noteTestData;
}

describe('component: Timeline-Note', () => {
  let component: TimelineNoteTestComponent;
  let fixture: ComponentFixture<TimelineNoteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineNoteComponent, TimelineNoteTestComponent],
      teardown: { destroyAfterEach: false }
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineNoteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the timeline note', () => {
    expect(component).toBeTruthy();
  });

  it('should show the author', () => {
    const p = fixture.nativeElement.querySelector(`[data-author="${noteTestData.author}"]`);
    expect(p.textContent).toContain(noteTestData.author);
  });

  it('should show the date', () => {
    const p = fixture.nativeElement.querySelector(`[data-date="${noteTestData.date}"]`);
    expect(p.textContent).toContain(noteTestData.date);
  });

  it('should show the note content', () => {
    const p = fixture.nativeElement.querySelector(`p`);
    expect(p.textContent).toContain(noteTestData.text);
  });
});
