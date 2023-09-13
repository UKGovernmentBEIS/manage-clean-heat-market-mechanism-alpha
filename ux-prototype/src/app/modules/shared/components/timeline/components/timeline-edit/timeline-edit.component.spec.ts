// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as _ from 'lodash-es';
import { Component } from '@angular/core';
import { TimelineEditComponent } from './timeline-edit.component';

const editTestData =
  { date: "02/07/2025", editor: "Me 2", previousData: { files: [], gas: 100, oil: 200 }, updatedData: { files: [], gas: 200, oil: 300 } };

@Component({
  template: `<timeline-edit [edit]="edit"/>`,
})
class TimelineEditTestComponent {
  edit = editTestData;
}

describe('component: Timeline-Edit', () => {
  let component: TimelineEditTestComponent;
  let fixture: ComponentFixture<TimelineEditTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineEditComponent, TimelineEditTestComponent],
      teardown: { destroyAfterEach: false }
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineEditTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the timeline edit', () => {
    expect(component).toBeTruthy();
  });

  it('should show the author', () => {
    const p = fixture.nativeElement.querySelector(`[data-author="${editTestData.editor}"]`);
    expect(p.textContent).toContain(editTestData.editor);
  });

  it('should show the date', () => {
    const p = fixture.nativeElement.querySelector(`[data-date="${editTestData.date}"]`);
    expect(p.textContent).toContain(editTestData.date);
  });
});
