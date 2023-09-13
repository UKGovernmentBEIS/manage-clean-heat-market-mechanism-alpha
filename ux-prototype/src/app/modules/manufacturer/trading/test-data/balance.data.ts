// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Balance } from '../models/balance';

const DEFAULT_BALANCE: Balance = {
  balance: 5_455,
  obligation: 4_249,
  excess: 5_455 - 4_249,
};

export { DEFAULT_BALANCE };
