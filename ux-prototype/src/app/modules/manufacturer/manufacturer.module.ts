import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManufacturerRoutingModule } from './manufacturer.routing';

@NgModule({
  imports: [ManufacturerRoutingModule, SharedModule],
  declarations: [],
  providers: [],
  exports: [],
})
export class ManufacturerModule { }
