import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TargetCreditProvider } from '../../providers/targets-and-credits.provider';
import { Router } from '@angular/router';

export interface Radio {
  value: number;
  display: string;
}

@Component({
  selector: 'state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.css'],
})
export class StateSelectorComponent {
  public readonly stateSelectorForm: FormGroup = this.formBuilder.group({
    state: ['', Validators.required],
  });

  public readonly radios: Radio[] = [
    {
      value: 1,
      display: 'I am not meeting my obligation',
    },
    {
      value: 2,
      display: 'I am meeting my obligation',
    },
    {
      value: 3,
      display: 'I have not reached the threshold',
    },
    {
      value: 4,
      display: 'I do not have a target',
    },
    {
      value: 5,
      display: 'Before carry forward / carry over',
    },
  ];

  public constructor(
    private formBuilder: FormBuilder,
    private targetCreditProvider: TargetCreditProvider,
    private router: Router
  ) {}

  public submit() {
    const state = this.stateSelectorForm.get('state')?.value;
    this.targetCreditProvider.setState(state);
    this.router.navigate(['manufacturer', 'targets-and-credits', 'view']);
  }
}
