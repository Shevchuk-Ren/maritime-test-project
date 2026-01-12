import { Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { NavItem } from '@core/models/navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly navItemsSignal = signal<NavItem[]>([
    {
      id: 'dashboard',
      name: 'Dashboard',
      iconPath:
        'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      route: '/',
    },
    {
      id: 'accounts',
      name: 'Accounts',
      iconPath: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      route: '/accounts',
    },
    {
      id: 'brokers',
      name: 'Brokers',
      iconPath:
        'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      route: '/brokers',
    },
    {
      id: 'submissions',
      name: 'Submissions',
      iconPath:
        'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      route: '/submissions',
    },
    {
      id: 'organizations',
      name: 'Organizations',
      iconPath:
        'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      route: '/organizations',
    },
    {
      id: 'goals',
      name: 'Goals & Rules',
      iconPath:
        'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      route: '/goals',
    },
    {
      id: 'admin',
      name: 'Admin',
      iconPath:
        'M1.58997 16.452C1.20997 16.827 1 17.336 1 17.866V20.038C1 20.303 1.11004 20.558 1.29004 20.745C1.48004 20.933 1.73 21.038 2 21.038H5C5.27 21.038 5.51996 20.933 5.70996 20.745C5.88996 20.558 6 20.303 6 20.038V19.038C6 18.773 6.11004 18.519 6.29004 18.331C6.48004 18.144 6.73 18.038 7 18.038H8C8.27 18.038 8.51996 17.933 8.70996 17.745C8.88996 17.558 9 17.303 9 17.038V16.038C9 15.773 9.11004 15.519 9.29004 15.331C9.48004 15.144 9.73 15.038 10 15.038H10.17C10.7 15.038 11.21 14.827 11.59 14.452L12.4 13.638C13.79 14.122 15.2999 14.12 16.6899 13.633C18.0799 13.145 19.26 12.201 20.04 10.954C20.83 9.70801 21.16 8.232 21 6.77C20.83 5.307 20.18 3.944 19.13 2.904C18.09 1.863 16.73 1.206 15.27 1.041C13.81 0.876005 12.33 1.21201 11.08 1.99401C9.83996 2.77601 8.89003 3.95801 8.41003 5.34701C7.92003 6.73501 7.92002 8.24801 8.40002 9.63801L1.58997 16.452Z',

      route: '/admin',
    },
  ]);

  setActive(name: string): void {
    this.navItemsSignal.update((items) =>
      items.map((item) => ({ ...item, active: item.name === name })),
    );
  }

  readonly navItems = this.navItemsSignal.asReadonly();
}
