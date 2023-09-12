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
