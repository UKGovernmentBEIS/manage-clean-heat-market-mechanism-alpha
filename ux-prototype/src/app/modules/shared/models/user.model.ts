export interface IUser {
  id: number | null;
  name: string;
  email: string;
  status: string;
}

export interface IViewUser extends IUser {
  statusColour: string;
}
