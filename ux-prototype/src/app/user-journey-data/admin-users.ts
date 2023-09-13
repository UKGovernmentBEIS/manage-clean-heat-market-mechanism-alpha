// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { IUser } from '../modules/shared/models/user.model';

export default function AdminUserData(): IUser[] {
  return [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@ea.co.uk',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Barbra Jones',
      email: 'barbra@ea.co.uk',
      status: 'Active'
    },
  ];
}
