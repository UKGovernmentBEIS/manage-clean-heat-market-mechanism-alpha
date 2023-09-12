import { ILink } from './link.model';
import { IPanel } from './panel.model';

export interface IConfirmationData {
  panel: IPanel | null;
  whatNextBody: string;
  links: Partial<ILink>[];
}
