import { Component, OnInit } from '@angular/core';
import BoilerSalesAdminData from 'src/app/user-journey-data/boiler-sales-admin';
import BoilerSalesInputData from 'src/app/user-journey-data/boiler-sales-input';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminUserProvider } from 'src/app/modules/shared/providers/admin-user-provider';
import AdminUserData from 'src/app/user-journey-data/admin-users';
import { AccountProvider } from 'src/app/modules/manufacturer/account/providers/account.provider';

interface IBoilerSalesForm {
  userRole: FormControl<string | null>;
  manufacturerStatus: FormControl<string | null>;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  adminRoleForm: FormGroup<IBoilerSalesForm> = new FormGroup({
    userRole: new FormControl<string | null>('', {}),
    manufacturerStatus: new FormControl<string | null>('active', {}),
  });

  constructor(
    private router: Router,
    private boilerSalesProvider: BoilerSalesProvider,
    private userAdminProvider: AdminUserProvider,
    private accountProvider: AccountProvider
  ) {}

  private setupManufacturer() {
    this.boilerSalesProvider.clearManufacturerData();
    this.boilerSalesProvider.setManufacturer('Test manufacturer');
    this.boilerSalesProvider.setBoilerSales(BoilerSalesInputData());
    this.boilerSalesProvider.setAdmin(false);
    this.accountProvider.useExisting();
    this.router.navigate(['manufacturer']);
  }

  private setupAdmin() {
    this.userAdminProvider.setUsers(AdminUserData());
    this.boilerSalesProvider.clearAdminWorkData();
    this.boilerSalesProvider.setBoilerSales(BoilerSalesAdminData());
    this.boilerSalesProvider.setAdmin(true);
    this.router.navigate(['admin']);
  }

  onSubmit() {
    const userRole = this.adminRoleForm.value.userRole;
    const manufacturerStatus = this.adminRoleForm.value.manufacturerStatus;
    if (userRole == 'manufacturer') {
      if (manufacturerStatus == 'active') {
        this.setupManufacturer();
      } else if (manufacturerStatus == 'pending') {
        this.accountProvider.useNew();
        this.router.navigate(['manufacturer', 'account', 'basic-details']);
      }
    } else if (userRole == 'admin') {
      this.setupAdmin();
    }
  }
}
