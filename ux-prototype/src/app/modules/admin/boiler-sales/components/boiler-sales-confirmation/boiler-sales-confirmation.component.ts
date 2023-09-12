import { Component } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { IConfirmationData } from 'src/app/modules/shared/models/confirmation-data.model';
import { ILink } from 'src/app/modules/shared/models/link.model';
import { BoilerSalesProvider } from 'src/app/modules/shared/providers/boiler-sales.provider';

@Component({
  selector: 'boiler-sales-confirmation',
  templateUrl: './boiler-sales-confirmation.component.html',
})
export class BoilerSalesConfirmationComponent {
  data$: Observable<IConfirmationData>;
  whatNextBody = 'The status has now been changed.';

  constructor(private boilerSalesProvider: BoilerSalesProvider) {
    this.data$ = combineLatest([
      this.boilerSalesProvider.manufacturer$,
      this.boilerSalesProvider.quarter$,
    ]).pipe(
      map(([manufacturer, quarter]) => {
        const links: Partial<ILink>[] = [
          {
            route: '/home',
            name: 'Back home',
          },
          {
            route: '../manufacturers',
            name: 'View all manufacturer boiler sales',
          },
        ];
        links.push({
          route: '../manufacturer',
          name: `View ${manufacturer} boiler sales`,
        });
        return {
          panel: {
            title: 'Review completed',
            body: `${manufacturer} quarter ${quarter} boiler sales`,
          },
          whatNextBody: this.whatNextBody,
          links: links,
        };
      })
    );
  }
}
