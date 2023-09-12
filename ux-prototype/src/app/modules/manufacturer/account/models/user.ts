import { FormControl } from '@angular/forms';

export interface AccountUser {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  confirmEmail: FormControl<string | null>;
  telephone: FormControl<string | null>;
  jobTitle: FormControl<string | null>;
  nominated: FormControl<boolean | null>;
  isGeneralUser: FormControl<boolean | null>;
  isAdminUser: FormControl<boolean | null>;
}
