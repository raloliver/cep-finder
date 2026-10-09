import { Routes } from '@angular/router';

import { AppPath } from '@core/navigation/app.path';
import { AddressSearchPage } from './pages/address-search-page/address-search-page.component';

export const ADDRESSES_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppPath.search },
      {
        path: AppPath.search,
        component: AddressSearchPage,
        title: 'addresses.search.title',
      },
    ],
  },
];
