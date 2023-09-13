// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { BoilerSalesComponent } from './components/boiler-sales/boiler-sales.component';
import { BoilerSalesAddComponent } from './components/boiler-sales-add/boiler-sales-add.component';
import { BoilerSalesFormSummaryComponent } from './components/boiler-sales-form-summary/boiler-sales-form-summary.component';
import { BoilerSalesConfirmationComponent } from './components/boiler-sales-confirmation/boiler-sales-confirmation.component';
import { SharedModule } from '../../shared/shared.module';
import { BoilerSalesManufacturerRoutingModule } from './boiler-sales-manufacturer.routing';

@NgModule({
  imports: [BoilerSalesManufacturerRoutingModule, SharedModule],
  declarations: [
    BoilerSalesComponent,
    BoilerSalesAddComponent,
    BoilerSalesFormSummaryComponent,
    BoilerSalesConfirmationComponent,
  ],
  providers: [],
  exports: [],
})
export class BoilerSalesManufacturerModule {}
