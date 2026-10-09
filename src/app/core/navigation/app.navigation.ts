import { NavItem } from '@shared/ui/nav-menu/nav-menu.interface';
import { AppLink } from './app.path';

export const APP_NAVIGATION: readonly NavItem[] = [
  { labelKey: 'header.home', link: AppLink.home, icon: 'home' },
  {
    labelKey: 'header.addresses',
    link: AppLink.addresses,
    icon: 'location_on',
    children: [{ labelKey: 'header.searchAddresses', link: AppLink.addressSearch, icon: 'search' }],
  },
];
