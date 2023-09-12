import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { StateSelectorComponent } from './components/state-selector/state-selector.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'state-selector', pathMatch: 'full' },
      {
        path: 'state-selector',
        component: StateSelectorComponent,
      },
      {
        path: 'view',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TargetsAndCreditsRoutingModule { }
