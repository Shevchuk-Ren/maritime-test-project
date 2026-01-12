import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app-shell/app-shell').then((m) => m.AppShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/pages/dashboard/dashboard').then((m) => m.DashboardPage),
      },
      {
        path: 'accounts',
        loadComponent: () =>
          import('./features/pages/accounts/accounts').then((m) => m.AccountsPage),
      },
    ],
  },
];
