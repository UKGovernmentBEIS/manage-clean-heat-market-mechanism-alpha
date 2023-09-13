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
          import('./dashboard/dashboard-manufacturer.module').then(
            (m) => m.DashboardManufacturerModule
          ),
      },
      {
        path: 'boiler-sales',
        loadChildren: () =>
          import('./boiler-sales/boiler-sales-manufacturer.module').then(
            (m) => m.BoilerSalesManufacturerModule
          ),
      },
      {
        path: 'targets-and-credits',
        loadChildren: () =>
          import('./targets-and-credits/targets-and-credits.module').then(
            (m) => m.TargetsAndCreditsModule
          ),
      },
      {
        path: 'trading',
        loadChildren: () =>
          import('./trading/trading.module').then((m) => m.TradingModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/manufacturer-account.module').then(
            (m) => m.ManufacturerAccountModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufacturerRoutingModule {}
