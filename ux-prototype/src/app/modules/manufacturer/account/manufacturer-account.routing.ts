import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsComponent } from './components/basic-details/basic-details.component';
import { StructureGuardQuestionComponent } from './components/structure/guard-question/guard-question.component';
import { StructureOverviewComponent } from './components/structure/overview/overview.component';
import { StructureAddSubsidiaryComponent } from './components/structure/add-subsidiary/add-subsidiary.component';
import { UsersOverviewComponent } from './components/users/overview/overview.component';
import { AccountCheckAnswersComponent } from './components/check-answers/check-answers.component';
import { AccountCompleteComponent } from './components/complete/complete.component';
import { AccountViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'view-details', pathMatch: 'full' },
      {
        path: 'view-details',
        component: AccountViewDetailsComponent,
      },
      {
        path: 'basic-details',
        component: BasicDetailsComponent,
      },
      {
        path: 'structure/guard-question',
        component: StructureGuardQuestionComponent,
      },
      {
        path: 'structure/overview',
        component: StructureOverviewComponent,
      },
      {
        path: 'structure/add-subsidiary',
        component: StructureAddSubsidiaryComponent,
      },
      {
        path: 'users',
        component: UsersOverviewComponent,
      },
      {
        path: 'check-answers',
        component: AccountCheckAnswersComponent,
      },
      {
        path: 'complete',
        component: AccountCompleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufacturerAccountRoutingModule {}
