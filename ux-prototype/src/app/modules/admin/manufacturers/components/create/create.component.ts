import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminAccountProvider } from '../../providers/account.provider';
import { Manufacturer } from '../../models/manufacturer';

@Component({
  selector: 'manufacturers-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class ManufacturersCreateComponent {
  public isCreatingManufacturer: boolean = true;
  public isInvitingLeadUser: boolean = false;
  public isCheckingAnswers: boolean = false;
  public isFinished: boolean = false;

  public organisationName: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public confirmEmail: string = '';
  public telephone: string = '';
  public jobTitle: string = '';
  public isAdminUser: boolean = true;
  public isGeneralUser: boolean = false;

  constructor(
    private router: Router,
    private accountProvider: AdminAccountProvider
  ) {}

  private create() {
    this.accountProvider.create({
      name: this.organisationName,
      user: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        telephone: this.telephone,
        jobTitle: this.jobTitle,
        isAdminUser: this.isAdminUser,
        isGeneralUser: this.isGeneralUser,
      },
    });
  }

  public showPage(page: number) {
    this.isCreatingManufacturer = page == 1;
    this.isInvitingLeadUser = page == 2;
    this.isCheckingAnswers = page == 3;
    this.isFinished = page == 4;
    if (page == 4) {
      this.create();
    }
  }

  public cancel() {
    this.router.navigate(['admin', 'manufacturers', 'overview']);
  }
}
