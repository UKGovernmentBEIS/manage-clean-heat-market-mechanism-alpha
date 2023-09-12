import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILink } from 'src/app/modules/shared/models/link.model';
import { quarter } from 'src/app/modules/shared/models/boiler-sales.model';

interface IBoilerSalesNoteForm {
  text: FormControl<string>;
}

@Component({
  selector: 'boiler-sales-review-note',
  templateUrl: './boiler-sales-review-note.component.html',
})
export class BoilerSalesReviewNoteComponent {
  year = this.boilerSalesProvider.year;
  links: Partial<ILink>[] = [
    {
      route: '../manufacturers',
      name: 'Manufacturers',
    },
    {
      route: '../manufacturer',
      name: 'Manufacturer Overview',
    },
    {
      route: '../review',
      name: 'Review',
    },
  ];
  manufacturer$: Observable<string | null>;
  quarter$: Observable<quarter | null>;

  boilerSalesNoteForm: FormGroup<IBoilerSalesNoteForm>;

  constructor(
    private boilerSalesProvider: BoilerSalesProvider,
    private router: Router
  ) {
    this.manufacturer$ = boilerSalesProvider.manufacturer$;
    this.quarter$ = boilerSalesProvider.quarter$;

    this.boilerSalesNoteForm = new FormGroup({
      text: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  onSubmit() {
    if (this.boilerSalesNoteForm.valid) {
      this.boilerSalesProvider.addNote(
        this.boilerSalesNoteForm.getRawValue().text
      );
      this.router.navigate(['admin', 'boiler-sales', 'review']);
    }
  }

  onCancel() {
    this.router.navigate(['admin', 'boiler-sales', 'review']);
  }
}
