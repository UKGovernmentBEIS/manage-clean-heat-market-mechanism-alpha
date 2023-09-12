import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBoilerSalesData } from '../../models/boiler-sales-data.model';
import { IFile } from '../../models/file.model';
import { quarter } from '../../models/boiler-sales.model';

interface IBoilerSalesForm {
  oil: FormControl<number | null>;
  gas: FormControl<number | null>;
  files: FormControl<IFile[]>;
}

@Component({
  selector: 'boiler-sales-form',
  templateUrl: './boiler-sales-form.component.html',
})
export class BoilerSalesFormComponent implements OnInit {
  @Input() year: string | null = '2023';
  @Input() quarter: quarter | null = null;
  @Input() gas: number | null = null;
  @Input() oil: number | null = null;
  @Input() submitBtnText = 'Submit';
  @Input() admin = false;

  @Output() submit = new EventEmitter<IBoilerSalesData>();
  @Output() cancel = new EventEmitter();

  boilerSalesForm: FormGroup<IBoilerSalesForm>;

  constructor() {
    this.boilerSalesForm = new FormGroup({
      oil: new FormControl<number | null>(this.gas, {
        validators: [Validators.required, Validators.min(0)],
      }),
      gas: new FormControl<number | null>(this.oil, {
        validators: [Validators.required, Validators.min(0)],
      }),
      files: new FormControl<IFile[]>([], {
        nonNullable: true,
      }),
    });
  }

  ngOnInit() {
    this.boilerSalesForm.patchValue({
      oil: this.oil,
      gas: this.gas,
      files: [],
    });
  }

  onFileChange(event: any) {
    const files = Array.from(event.target.files).map((file: File) => {
      return { name: file.name, link: null };
    });
    this.boilerSalesForm.patchValue({ files: files });
  }

  onSubmit() {
    if (this.boilerSalesForm.valid) {
      this.submit.emit(this.boilerSalesForm.getRawValue());
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
