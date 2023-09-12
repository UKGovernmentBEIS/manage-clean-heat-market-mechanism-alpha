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
