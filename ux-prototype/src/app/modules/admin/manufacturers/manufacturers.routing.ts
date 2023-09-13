// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturersOverviewComponent } from './components/overview/overview.component';
import { ManufacturersCreateComponent } from './components/create/create.component';
import { ManufacturersViewComponent } from './components/manufacturer/view/view.component';
import { ManufacturersApproveComponent } from './components/manufacturer/approve/approve.component';
import { ManufacturersRetireComponent } from './components/manufacturer/retire/retire.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: ManufacturersOverviewComponent,
      },
      {
        path: 'create',
        component: ManufacturersCreateComponent,
      },
      {
        path: ':id',
        children: [
          {
            path: 'details',
            component: ManufacturersViewComponent,
          },
          {
            path: 'approve',
            component: ManufacturersApproveComponent,
          },
          {
            path: 'retire',
            component: ManufacturersRetireComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminManufacturersRoutingModule {}
