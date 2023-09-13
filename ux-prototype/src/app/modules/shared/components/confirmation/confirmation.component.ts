// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, Input } from '@angular/core';
import { IPanel } from '../../models/panel.model';
import { ILink } from '../../models/link.model';
@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent {
  @Input() panel: IPanel | null = null;
  @Input() whatNextBody: string | null = null;
  @Input() links: Partial<ILink>[] = [];

  onClick(f: (() => any) | null) {
    if (f) {
      f();
    }
  }
}
