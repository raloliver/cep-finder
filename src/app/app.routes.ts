import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('@features/home/home.routes').then((c) => c.HOME_ROUTES),
  },
  { path: '**', redirectTo: 'home' },
];
