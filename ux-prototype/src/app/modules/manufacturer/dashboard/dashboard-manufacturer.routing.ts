import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturerHomeComponent } from './components/manufacturer-home/manufacturer-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ManufacturerHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardManufacturerRoutingModule { }
