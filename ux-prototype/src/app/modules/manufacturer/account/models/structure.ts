// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { FormControl } from '@angular/forms';
import { IFile } from 'src/app/modules/shared/models/file.model';

export interface StructureGuardQuestion {
  hasSubsidiaries: FormControl<StructureGuardQuestionResponse>;
}

export type StructureGuardQuestionResponse = 'Yes' | 'No' | null;

export interface Structure {
  parent: FormControl<string | null>;
  subsidiaries: FormControl<StructureSubsidiary[] | null>;
  files: FormControl<IFile[] | null>;
}

export interface StructureSubsidiary {
  name: FormControl<string | null>;
  number: FormControl<string | null>;
  nominated: FormControl<boolean | null>;
}
