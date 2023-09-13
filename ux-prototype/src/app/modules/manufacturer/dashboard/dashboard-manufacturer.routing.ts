// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
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
