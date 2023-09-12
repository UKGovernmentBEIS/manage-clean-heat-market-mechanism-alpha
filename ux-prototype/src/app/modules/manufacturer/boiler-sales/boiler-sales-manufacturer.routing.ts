import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoilerSalesAddComponent } from './components/boiler-sales-add/boiler-sales-add.component';
import { BoilerSalesFormSummaryComponent } from './components/boiler-sales-form-summary/boiler-sales-form-summary.component';
import { BoilerSalesConfirmationComponent } from './components/boiler-sales-confirmation/boiler-sales-confirmation.component';
import { BoilerSalesComponent } from './components/boiler-sales/boiler-sales.component';
import { NavigationComponent } from '../../shared/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: BoilerSalesComponent,
      },
      {
        path: 'add',
        component: BoilerSalesAddComponent,
      },
      {
        path: 'summary',
        component: BoilerSalesFormSummaryComponent,
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
export class BoilerSalesManufacturerRoutingModule {}
