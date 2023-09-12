import { Component } from '@angular/core';
import { BoilerSalesProvider } from '../../../../shared/providers/boiler-sales.provider';
import { Observable, map } from 'rxjs';
import { ILink } from 'src/app/modules/shared/models/link.model';
import { IPanel } from 'src/app/modules/shared/models/panel.model';

@Component({
  selector: 'boiler-sales-confirmation',
  templateUrl: './boiler-sales-confirmation.component.html',
})
export class BoilerSalesConfirmationComponent {
  panel$: Observable<IPanel>;

  whatNextBody =
    'Your data has been submitted and will be used to calculate your target. The administrator can now see your data and will review your supporting evidence. They will contact you directly with any questions.';
  links: Partial<ILink>[] = [
    { route: '/home', name: 'Back home' },
    {
      route: '../overview',
      name: 'Boiler Sales Data',
    },
    {
      route: '/manufacturer/targets-and-credits/view',
      name: 'View target and credits',
    },
  ];

  constructor(private boilerSalesProvider: BoilerSalesProvider) {
    this.panel$ = this.boilerSalesProvider.quarter$.pipe(
      map((quarter) => {
        return {
          title: `Quarter ${quarter}`,
          body: 'Sales data has been successfully submitted',
        };
      })
    );
  }
}
