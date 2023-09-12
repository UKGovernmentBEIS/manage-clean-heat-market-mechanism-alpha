import { INavElement } from './navigation.component';

const ADMIN_AREA: INavElement[] = [
  {
    text: 'Dashboard',
    route: '/admin/dashboard',
    activeClass: '',
  },
  {
    text: 'Boiler sales',
    route: '/admin/boiler-sales',
    activeClass: '',
  },
  {
    text: 'Admin accounts',
    route: '/admin/admin-accounts',
    activeClass: '',
  },
  {
    text: 'Manufacturers',
    route: '/admin/manufacturers',
    activeClass: '',
  },
];

const MANUFACTURER_AREA: INavElement[] = [
  {
    text: 'Dashboard',
    route: '/manufacturer/dashboard',
    activeClass: '',
  },
  {
    text: 'Boiler sales',
    route: '/manufacturer/boiler-sales/overview',
    activeClass: '',
  },
  {
    text: 'Targets and credits',
    route: '/manufacturer/targets-and-credits/state-selector',
    activeClass: '',
  },
  {
    text: 'Transfers',
    route: '/manufacturer/trading',
    activeClass: '',
  },
  {
    text: 'Account',
    route: '/manufacturer/account',
    activeClass: '',
  },
];

export { ADMIN_AREA, MANUFACTURER_AREA };
