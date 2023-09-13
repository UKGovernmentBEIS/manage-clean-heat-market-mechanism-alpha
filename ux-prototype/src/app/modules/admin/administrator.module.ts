// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdministratorRoutingModule } from './administrator.routing';

@NgModule({
  imports: [AdministratorRoutingModule, SharedModule],
  declarations: [],
  providers: [],
  exports: [],
})
export class AdministratorModule { }
