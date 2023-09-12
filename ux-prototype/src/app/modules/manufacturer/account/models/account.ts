import { FormGroup } from '@angular/forms';
import { BasicDetails } from './basic-details';
import { Structure, StructureGuardQuestion } from './structure';
import { AccountUser } from './user';

export interface Account {
  basicDetails: FormGroup<BasicDetails>;
  structureGuardQuestion: FormGroup<StructureGuardQuestion>;
  structure: FormGroup<Structure>;
  users: AccountUser[];
}
