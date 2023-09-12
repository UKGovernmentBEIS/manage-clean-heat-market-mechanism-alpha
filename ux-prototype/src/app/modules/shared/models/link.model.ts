export interface ILink {
  route: string;
  name: string;
  onClick: (() => any) | null;
}
