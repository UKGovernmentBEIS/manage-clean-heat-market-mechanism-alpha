// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { ILink } from './link.model';
import { IPanel } from './panel.model';

export interface IConfirmationData {
  panel: IPanel | null;
  whatNextBody: string;
  links: Partial<ILink>[];
}
