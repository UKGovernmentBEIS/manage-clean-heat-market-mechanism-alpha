// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LedgerComponent } from './components/ledger/ledger.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'ledger', pathMatch: 'full' },
      {
        path: 'ledger',
        component: LedgerComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('./components/requests/requests.module').then(
            (m) => m.RequestsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradingRoutingModule {}
