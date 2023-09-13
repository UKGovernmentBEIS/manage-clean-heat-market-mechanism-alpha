// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
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
