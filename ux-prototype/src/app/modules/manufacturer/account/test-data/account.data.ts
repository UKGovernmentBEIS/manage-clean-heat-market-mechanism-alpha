import { FormControl, FormGroup } from '@angular/forms';
import { BasicDetails } from '../models/basic-details';
import { Account } from '../models/account';
import {
  Structure,
  StructureGuardQuestion,
  StructureGuardQuestionResponse,
  StructureSubsidiary,
} from '../models/structure';
import { IFile } from 'src/app/modules/shared/models/file.model';

const NEW_ACCOUNT: Account = {
  basicDetails: new FormGroup<BasicDetails>({
    name: new FormControl<string>(''),
    correspondenceSame: new FormControl<boolean>(true),
    registeredAddressLineOne: new FormControl<string>(''),
    registeredAddressLineTwo: new FormControl<string>(''),
    registeredAddressTown: new FormControl<string>(''),
    registeredAddressCounty: new FormControl<string>(''),
    registeredAddressPostCode: new FormControl<string>(''),
    correspondenceAddressLineOne: new FormControl<string>(''),
    correspondenceAddressLineTwo: new FormControl<string>(''),
    correspondenceAddressTown: new FormControl<string>(''),
    correspondenceAddressCounty: new FormControl<string>(''),
    correspondenceAddressPostCode: new FormControl<string>(''),
  }),
  structureGuardQuestion: new FormGroup<StructureGuardQuestion>({
    hasSubsidiaries: new FormControl<StructureGuardQuestionResponse>(null),
  }),
  structure: new FormGroup<Structure>({
    parent: new FormControl<string | null>(''),
    subsidiaries: new FormControl<StructureSubsidiary[] | null>([]),
    files: new FormControl<IFile[] | null>([]),
  }),
  users: [],
};

const EXISTING_ACCOUNT: Account = {
  basicDetails: new FormGroup<BasicDetails>({
    name: new FormControl<string>('Test Ltd'),
    correspondenceSame: new FormControl<boolean>(true),
    registeredAddressLineOne: new FormControl<string>('123 Test Lane'),
    registeredAddressLineTwo: new FormControl<string>(''),
    registeredAddressTown: new FormControl<string>('Testville'),
    registeredAddressCounty: new FormControl<string>('Surrey'),
    registeredAddressPostCode: new FormControl<string>('TE5 5ST'),
    correspondenceAddressLineOne: new FormControl<string>(''),
    correspondenceAddressLineTwo: new FormControl<string>(''),
    correspondenceAddressTown: new FormControl<string>(''),
    correspondenceAddressCounty: new FormControl<string>(''),
    correspondenceAddressPostCode: new FormControl<string>(''),
  }),
  structureGuardQuestion: new FormGroup<StructureGuardQuestion>({
    hasSubsidiaries: new FormControl<StructureGuardQuestionResponse>('Yes'),
  }),
  structure: new FormGroup<Structure>({
    parent: new FormControl<string | null>('Parent'),
    subsidiaries: new FormControl<StructureSubsidiary[] | null>([
      {
        name: new FormControl<string | null>('Subsidiary One'),
        number: new FormControl<string | null>('111'),
        nominated: new FormControl<boolean | null>(true),
      },
      {
        name: new FormControl<string | null>('Subsidiary Two'),
        number: new FormControl<string | null>('222'),
        nominated: new FormControl<boolean | null>(false),
      },
    ]),
    files: new FormControl<IFile[] | null>([
      {
        name: 'diagram.pdf',
        link: '',
      },
    ]),
  }),
  users: [
    {
      firstName: new FormControl<string | null>('James'),
      lastName: new FormControl<string | null>('Smith'),
      email: new FormControl<string | null>('james.smith@example.com'),
      confirmEmail: new FormControl<string | null>('james.smith@example.com'),
      telephone: new FormControl<string | null>('07123 654 789'),
      jobTitle: new FormControl<string | null>('Director'),
      nominated: new FormControl<boolean | null>(true),
      isGeneralUser: new FormControl<boolean | null>(true),
      isAdminUser: new FormControl<boolean | null>(true),
    },
    {
      firstName: new FormControl<string | null>('Jim'),
      lastName: new FormControl<string | null>('Brown'),
      email: new FormControl<string | null>('jim.brown@example.com'),
      confirmEmail: new FormControl<string | null>('jim.brown@example.com'),
      telephone: new FormControl<string | null>('07123 654 789'),
      jobTitle: new FormControl<string | null>('Finance Analyst'),
      nominated: new FormControl<boolean | null>(false),
      isGeneralUser: new FormControl<boolean | null>(true),
      isAdminUser: new FormControl<boolean | null>(false),
    },
  ],
};

export { NEW_ACCOUNT, EXISTING_ACCOUNT };
