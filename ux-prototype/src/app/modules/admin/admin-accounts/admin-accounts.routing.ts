// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountsComponent } from './components/admin-accounts/admin-accounts.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { CheckValuesComponent } from './components/check-values/check-values.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { ArchiveAccountComponent } from './components/archive-account/archive-account.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'users',
        component: AdminAccountsComponent,
      },
      {
        path: 'user',
        component: AdminAccountComponent,
      },
      {
        path: 'check-values',
        component: CheckValuesComponent,
      },
      {
        path: 'confirmation',
        component: ConfirmationPageComponent,
      },
      {
        path: 'archive-account',
        component: ArchiveAccountComponent,
      },
      {
        path: 'activate-account',
        component: ActivateAccountComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAccountsRoutingModule { }
