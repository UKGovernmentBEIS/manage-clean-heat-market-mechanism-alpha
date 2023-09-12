import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/header.component';
import { AppFooterComponent } from './components/app-footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GOVUKComponentsModule } from './modules/govuk-frontend/govuk-frontend-components.module';
import { BoilerSalesManufacturerModule } from './modules/manufacturer/boiler-sales/boiler-sales-manufacturer.module';
import { BoilerSalesAdministratorRoutingModule } from './modules/admin/boiler-sales/boiler-sales-administrator.routing';
import { SharedModule } from './modules/shared/shared.module';
import { AccountProvider } from './modules/manufacturer/account/providers/account.provider';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GOVUKComponentsModule,
    BoilerSalesManufacturerModule,
    BoilerSalesAdministratorRoutingModule,
  ],
  providers: [AccountProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
