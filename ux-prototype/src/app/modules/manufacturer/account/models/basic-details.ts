import { FormControl } from '@angular/forms';

export interface BasicDetails {
  name: FormControl<string | null>;
  correspondenceSame: FormControl<boolean | null>;
  registeredAddressLineOne: FormControl<string | null>;
  registeredAddressLineTwo: FormControl<string | null>;
  registeredAddressTown: FormControl<string | null>;
  registeredAddressCounty: FormControl<string | null>;
  registeredAddressPostCode: FormControl<string | null>;
  correspondenceAddressLineOne: FormControl<string | null>;
  correspondenceAddressLineTwo: FormControl<string | null>;
  correspondenceAddressTown: FormControl<string | null>;
  correspondenceAddressCounty: FormControl<string | null>;
  correspondenceAddressPostCode: FormControl<string | null>;
}
