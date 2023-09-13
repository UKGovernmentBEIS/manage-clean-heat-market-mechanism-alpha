// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { IFile } from 'src/app/modules/shared/models/file.model';

export interface Manufacturer {
  id: number;
  name: string;
  status: ManufacturerStatus;
  requiresReview: boolean;
  user: ManufacturerLeadUser;
  approval: ManufacturerApproval | null;
  retirement: ManufacturerApproval | null;
}

export type ManufacturerStatus = 'Pending' | 'Active' | 'Retired';

export interface ManufacturerLeadUser {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  jobTitle: string;
  isGeneralUser: boolean;
  isAdminUser: boolean;
}

export interface ManufacturerApproval {
  files: IFile[];
  notes: string;
}
