// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { NgModule } from '@angular/core';
import { RequestsRoutingModule } from './requests.routing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { OverviewComponent } from './components/overview/overview.component';
import { ReviewComponent } from './components/review/review.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [RequestsRoutingModule, SharedModule, FormsModule],
  declarations: [OverviewComponent, ReviewComponent, CreateComponent],
  providers: [],
  exports: [],
})
export class RequestsModule {}
