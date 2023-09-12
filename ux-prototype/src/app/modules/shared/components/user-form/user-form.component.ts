import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/user.model';

interface IUserForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
}

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  @Input() user: IUser | null = null;
  @Input() submitBtnText: string | null = 'Save';
  @Input() archiveBtnText: string | null = 'Activate';
  @Input() headerText: string | null = 'Add user';

  @Output() submit = new EventEmitter<IUser>();
  @Output() archive = new EventEmitter<IUser>();
  @Output() cancel = new EventEmitter();

  userForm: FormGroup<IUserForm>;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl<string | null>(this.user?.name ?? null, {
        validators: [Validators.required],
      }),
      email: new FormControl<string | null>(this.user?.email ?? null, {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {
    this.userForm.patchValue({
      name: this.user?.name,
      email: this.user?.email,
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      let raw = this.userForm.getRawValue();
      let user: IUser = {
        name: raw.name ?? '',
        email: raw.email ?? '',
        status: 'Active',
        id: this.user?.id ?? null
      }
      this.submit.emit(user);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onArchive() {
    if (this.userForm.valid) {
      let raw = this.userForm.getRawValue();
      let user: IUser = {
        name: raw.name ?? '',
        email: raw.email ?? '',
        status: this.user?.status || 'Active',
        id: this.user?.id ?? null
      }
      this.archive.emit(user);
    }
  }
}
