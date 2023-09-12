import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoilerSalesReviewComponent } from './components/boiler-sales-review/boiler-sales-review.component';
import { BoilerSalesEditComponent } from './components/boiler-sales-edit/boiler-sales-edit.component';
import { BoilerSalesReviewNoteComponent } from './components/boiler-sales-review-note/boiler-sales-review-note.component';
import { BoilerSalesReviewSummaryComponent } from './components/boiler-sales-review-summary/boiler-sales-review-summary.component';
import { BoilerSalesConfirmationComponent } from './components/boiler-sales-confirmation/boiler-sales-confirmation.component';
import { BoilerSalesAdminComponent } from './components/boiler-sales-admin/boiler-sales-admin.component';
import { BoilerSalesAdminManufacturerComponent } from './components/boiler-sales-admin-manufacturer/boiler-sales-admin-manufacturer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'manufacturers', pathMatch: 'full' },
      {
        path: 'manufacturers',
        component: BoilerSalesAdminComponent,
      },
      {
        path: 'manufacturer',
        component: BoilerSalesAdminManufacturerComponent,
      },
      {
        path: 'review',
        component: BoilerSalesReviewComponent,
      },
      {
        path: 'edit',
        component: BoilerSalesEditComponent,
      },
      {
        path: 'make-note',
        component: BoilerSalesReviewNoteComponent,
      },
      {
        path: 'summary',
        component: BoilerSalesReviewSummaryComponent,
      },
      {
        path: 'confirmation',
        component: BoilerSalesConfirmationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerSalesAdministratorRoutingModule {}
