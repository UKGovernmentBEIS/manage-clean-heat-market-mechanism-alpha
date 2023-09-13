// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NavigationComponent, outlet: 'navigation' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard-administrator.module').then(
            (m) => m.DashboardAdministratorModule
          ),
      },
      {
        path: 'boiler-sales',
        loadChildren: () =>
          import('./boiler-sales/boiler-sales-administrator.module').then(
            (m) => m.BoilerSalesAdministratorModule
          ),
      },
      {
        path: 'admin-accounts',
        loadChildren: () =>
          import('./admin-accounts/admin-accounts.module').then(
            (m) => m.AdminAccountsModule
          ),
      },
      {
        path: 'manufacturers',
        loadChildren: () =>
          import('./manufacturers/manufacturers.module').then(
            (m) => m.AdminManufacturersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
