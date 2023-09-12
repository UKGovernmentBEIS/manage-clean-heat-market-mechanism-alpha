import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BoilerSalesFormComponent } from './components/boiler-sales-form/boiler-sales-form.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [
    BoilerSalesFormComponent,
    UserFormComponent,
    ConfirmationComponent,
    BreadcrumbsComponent,
    NavigationComponent,
  ],
  providers: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BoilerSalesFormComponent,
    UserFormComponent,
    ConfirmationComponent,
    BreadcrumbsComponent,
    NavigationComponent,
  ],
})
export class SharedModule {}
