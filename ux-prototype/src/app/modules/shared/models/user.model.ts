// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
export interface IUser {
  id: number | null;
  name: string;
  email: string;
  status: string;
}

export interface IViewUser extends IUser {
  statusColour: string;
}
