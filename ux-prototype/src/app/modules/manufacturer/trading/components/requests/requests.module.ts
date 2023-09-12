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
