// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BoilerSalesAdministratorRoutingModule as AdministratorRoutingModule } from './boiler-sales-administrator.routing';
import { BoilerSalesReviewComponent } from './components/boiler-sales-review/boiler-sales-review.component';
import { BoilerSalesEditComponent } from './components/boiler-sales-edit/boiler-sales-edit.component';
import { BoilerSalesReviewNoteComponent } from './components/boiler-sales-review-note/boiler-sales-review-note.component';
import { BoilerSalesTableComponent } from './components/boiler-sales-table/boiler-sales-table.component';
import { BoilerSalesReviewSummaryComponent } from './components/boiler-sales-review-summary/boiler-sales-review-summary.component';
import { BoilerSalesConfirmationComponent } from './components/boiler-sales-confirmation/boiler-sales-confirmation.component';
import { BoilerSalesAdminComponent } from './components/boiler-sales-admin/boiler-sales-admin.component';
import { BoilerSalesAdminManufacturerComponent } from './components/boiler-sales-admin-manufacturer/boiler-sales-admin-manufacturer.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { TimelineEditComponent } from '../../shared/components/timeline/components/timeline-edit/timeline-edit.component';
import { TimelineNoteComponent } from '../../shared/components/timeline/components/timeline-note/timeline-note.component';

@NgModule({
  imports: [AdministratorRoutingModule, SharedModule],
  declarations: [
    BoilerSalesAdminComponent,
    BoilerSalesAdminManufacturerComponent,
    BoilerSalesReviewComponent,
    BoilerSalesEditComponent,
    BoilerSalesReviewNoteComponent,
    BoilerSalesTableComponent,
    BoilerSalesReviewSummaryComponent,
    BoilerSalesConfirmationComponent,
    TimelineComponent,
    TimelineEditComponent,
    TimelineNoteComponent,
  ],
  providers: [],
  exports: [],
})
export class BoilerSalesAdministratorModule {}
