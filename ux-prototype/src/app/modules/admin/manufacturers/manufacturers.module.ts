import { NgModule } from '@angular/core';
import { AdminManufacturersRoutingModule } from './manufacturers.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminAccountProvider } from './providers/account.provider';
import { ManufacturersOverviewComponent } from './components/overview/overview.component';
import { FormsModule } from '@angular/forms';
import { ManufacturersCreateComponent } from './components/create/create.component';
import { ManufacturersViewComponent } from './components/manufacturer/view/view.component';
import { ManufacturersApproveComponent } from './components/manufacturer/approve/approve.component';
import { ManufacturersRetireComponent } from './components/manufacturer/retire/retire.component';

@NgModule({
  imports: [AdminManufacturersRoutingModule, SharedModule, FormsModule],
  declarations: [
    ManufacturersOverviewComponent,
    ManufacturersCreateComponent,
    ManufacturersViewComponent,
    ManufacturersApproveComponent,
    ManufacturersRetireComponent,
  ],
  providers: [AdminAccountProvider],
  exports: [],
})
export class AdminManufacturersModule {}
