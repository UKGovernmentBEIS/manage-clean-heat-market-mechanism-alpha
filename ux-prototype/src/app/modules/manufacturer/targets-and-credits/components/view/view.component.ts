// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Obligation } from '../../models/obligation';
import { TargetCreditProvider } from '../../providers/targets-and-credits.provider';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  public readonly obligation$: Observable<Obligation>;

  public constructor(protected targetCreditProvider: TargetCreditProvider) {
    this.obligation$ = this.targetCreditProvider.obligation$;
  }
}
