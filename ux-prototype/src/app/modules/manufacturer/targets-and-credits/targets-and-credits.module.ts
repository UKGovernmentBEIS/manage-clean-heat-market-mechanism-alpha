import { NgModule } from '@angular/core';
import { TargetsAndCreditsRoutingModule } from './targets-and-credits.routing';
import { SharedModule } from '../../shared/shared.module';
import { ViewComponent } from './components/view/view.component';
import { StateSelectorComponent } from './components/state-selector/state-selector.component';

@NgModule({
  imports: [TargetsAndCreditsRoutingModule, SharedModule],
  declarations: [ViewComponent, StateSelectorComponent],
  providers: [],
  exports: [],
})
export class TargetsAndCreditsModule {}
