import { Routes } from '@angular/router';
import { AppPath } from '@core/navigation/app.path';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppPath.home },
  {
    path: AppPath.home,
    loadChildren: () => import('@features/home/home.routes').then((c) => c.HOME_ROUTES),
  },
  {
    path: AppPath.addresses,
    loadChildren: () =>
      import('@features/addresses/addresses.routes').then((c) => c.ADDRESSES_ROUTES),
  },
  { path: '**', redirectTo: AppPath.home },
];
