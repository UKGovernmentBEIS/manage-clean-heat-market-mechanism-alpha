import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardManufacturerRoutingModule } from './dashboard-manufacturer.routing';

@NgModule({
  imports: [DashboardManufacturerRoutingModule, SharedModule],
  declarations: [],
  providers: [],
  exports: [],
})
export class DashboardManufacturerModule { }
