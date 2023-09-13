// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardAdministratorRoutingModule } from './dashboard-administrator.routing';

@NgModule({
  imports: [DashboardAdministratorRoutingModule, SharedModule],
  declarations: [],
  providers: [],
  exports: [],
})
export class DashboardAdministratorModule { }
