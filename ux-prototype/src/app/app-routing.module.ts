import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'manufacturer',
    loadChildren: () =>
      import(
        './modules/manufacturer/manufacturer.module'
      ).then((m) => m.ManufacturerModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import(
        './modules/admin/administrator.module'
      ).then((m) => m.AdministratorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
