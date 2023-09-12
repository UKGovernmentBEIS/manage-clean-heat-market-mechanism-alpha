import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ManufacturerAccountRoutingModule } from './manufacturer-account.routing';
import { AccountProvider } from './providers/account.provider';
import { BasicDetailsComponent } from './components/basic-details/basic-details.component';
import { StructureGuardQuestionComponent } from './components/structure/guard-question/guard-question.component';
import { StructureOverviewComponent } from './components/structure/overview/overview.component';
import { StructureAddSubsidiaryComponent } from './components/structure/add-subsidiary/add-subsidiary.component';
import { UsersOverviewComponent } from './components/users/overview/overview.component';
import { AccountCheckAnswersComponent } from './components/check-answers/check-answers.component';
import { AccountCompleteComponent } from './components/complete/complete.component';
import { AccountViewDetailsComponent } from './components/view-details/view-details.component';

@NgModule({
  imports: [ManufacturerAccountRoutingModule, SharedModule],
  declarations: [
    BasicDetailsComponent,
    StructureGuardQuestionComponent,
    StructureOverviewComponent,
    StructureAddSubsidiaryComponent,
    UsersOverviewComponent,
    AccountCheckAnswersComponent,
    AccountCompleteComponent,
    AccountViewDetailsComponent,
  ],
  providers: [],
  exports: [],
})
export class ManufacturerAccountModule {}
