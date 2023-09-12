import { Component, Input } from '@angular/core';
import { ILink } from '../../models/link.model';
@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  @Input() links: Partial<ILink>[] = [];
}
