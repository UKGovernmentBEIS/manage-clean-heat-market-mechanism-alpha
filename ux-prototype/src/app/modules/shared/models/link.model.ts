// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
export interface ILink {
  route: string;
  name: string;
  onClick: (() => any) | null;
}
