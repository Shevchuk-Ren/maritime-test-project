import { Injectable, signal, computed } from '@angular/core';
import { AccountRow, AccountStatus } from '@core/models/my-accounts';

type FilterMode = 'all' | AccountStatus;
type SortKey = 'renewalDate' | 'premium' | 'lossRatio' | 'triage' | 'name';
type SortDir = 'asc' | 'desc';
type GroupMode = 'none' | 'broker';

@Injectable({ providedIn: 'root' })
export class MyAccountsService {
  private readonly rowsSignal = signal<AccountRow[]>([
    {
      id: '1',
      name: 'NAMEX Tech Solutions',
      subtitle: 'Large Enterprise',
      line: 'D&O Liability',
      broker: 'Willis Towers',
      renewalDate: '04/16/2025',
      premium: '$2.3M',
      ratedPremium: '$2.8M',
      lossRatio: 32,
      appetite: 'HIGH',
      status: 'Active',
      triage: 180,
      winnability: 'Very Strong',
    },
    {
      id: '2',
      name: 'Alliance Healthcare Systems',
      subtitle: 'Mid-Market',
      line: 'Medical Malpractice',
      broker: 'Aon Risk',
      renewalDate: '06/30/2025',
      premium: '$1.7M',
      ratedPremium: '$1.9M',
      lossRatio: 38,
      appetite: 'MEDIUM',
      status: 'Under review',
      triage: 165,
      winnability: 'Strong',
    },
    {
      id: '3',
      name: 'Maritime Logistics Corp',
      subtitle: 'Shipping/Logistics',
      line: 'Marine Cargo',
      broker: 'Marsh McLennan',
      renewalDate: '09/05/2025',
      premium: '$875K',
      ratedPremium: '$920K',
      lossRatio: 25,
      appetite: 'HIGH',
      status: 'Active',
      triage: 182,
      winnability: 'Very Strong',
    },
    {
      id: '4',
      name: 'GreenField Energy Ltd',
      subtitle: 'Energy Sector',
      line: 'Environmental Liability',
      broker: 'Aon Risk',
      renewalDate: '07/22/2025',
      premium: '$1.2M',
      ratedPremium: '$1.4M',
      lossRatio: 67,
      appetite: 'CAUTIOUS',
      status: 'Under review',
      triage: 158,
      winnability: 'Medium',
    },
  ]);

  private readonly searchSignal = signal('');
  private readonly filterSignal = signal<FilterMode>('all');
  private readonly sortSignal = signal<{ key: SortKey; dir: SortDir } | null>({
    key: 'renewalDate',
    dir: 'asc',
  });
  private readonly groupSignal = signal<GroupMode>('none');

  readonly search = this.searchSignal.asReadonly();
  readonly filter = this.filterSignal.asReadonly();
  readonly sort = this.sortSignal.asReadonly();
  readonly group = this.groupSignal.asReadonly();

  readonly filteredAccounts = computed(() => {
    const q = (this.searchSignal() ?? '').trim().toLowerCase();
    const filter = this.filterSignal();
    const sort = this.sortSignal();
    const group = this.groupSignal();

    let list = this.rowsSignal().slice();

    if (q.length > 0) {
      list = list.filter((r) => {
        const hay = [
          r.name,
          r.subtitle,
          r.line,
          r.broker,
          r.status,
          r.appetite,
          r.winnability,
          r.premium,
          r.ratedPremium,
          String(r.lossRatio),
          String(r.triage),
        ]
          .join(' ')
          .toLowerCase();

        return hay.includes(q);
      });
    }

    if (filter !== 'all') {
      list = list.filter((r) => r.status === filter);
    }

    if (group === 'broker') {
      list.sort((a, b) => a.broker.localeCompare(b.broker) || a.name.localeCompare(b.name));
    }

    if (sort) {
      const { key, dir } = sort;
      const mult = dir === 'asc' ? 1 : -1;
      list.sort((a, b) => {
        const va = this.sortValue(a, key);
        const vb = this.sortValue(b, key);
        return va < vb ? -1 * mult : va > vb ? 1 * mult : 0;
      });
    }

    return list;
  });

  setSearch(v: string): void {
    this.searchSignal.set((v ?? '').toString());
  }

  toggleFilter(): void {
    const cur = this.filterSignal();
    if (cur === 'all') return this.filterSignal.set('Active');
    if (cur === 'Active') return this.filterSignal.set('Under review');
    return this.filterSignal.set('all');
  }

  toggleSort(): void {
    const cur = this.sortSignal();
    if (!cur) return this.sortSignal.set({ key: 'renewalDate', dir: 'asc' });

    if (cur.key !== 'renewalDate') return this.sortSignal.set({ key: 'renewalDate', dir: 'asc' });

    if (cur.dir === 'asc') return this.sortSignal.set({ key: 'renewalDate', dir: 'desc' });

    return this.sortSignal.set(null);
  }

  toggleGroup(): void {
    this.groupSignal.set(this.groupSignal() === 'none' ? 'broker' : 'none');
  }

  // ===== helpers =====
  private sortValue(row: AccountRow, key: SortKey): number | string {
    switch (key) {
      case 'renewalDate':
        return this.parseDate(row.renewalDate);
      case 'premium':
        return this.parseMoney(row.premium);
      case 'lossRatio':
        return row.lossRatio;
      case 'triage':
        return row.triage;
      case 'name':
        return row.name.toLowerCase();
    }
  }

  private parseDate(mmddyyyy: string): number {
    // expects MM/DD/YYYY
    const [mm, dd, yy] = (mmddyyyy ?? '').split('/').map((x) => Number(x));
    if (!mm || !dd || !yy) return 0;
    return new Date(yy, mm - 1, dd).getTime();
  }

  private parseMoney(v: string): number {
    const s = (v ?? '').replace(/[$,\s]/g, '').toUpperCase();
    const m = s.match(/^(\d+(\.\d+)?)([MK])?$/);
    if (!m) return 0;
    const n = Number(m[1]);
    const unit = m[3];
    if (unit === 'M') return n * 1_000_000;
    if (unit === 'K') return n * 1_000;
    return n;
  }

  resetView(): void {
    this.searchSignal.set('');
    this.filterSignal.set('all');
    this.sortSignal.set({ key: 'renewalDate', dir: 'asc' }); // або null якщо хочеш "без сорту"
    this.groupSignal.set('none');
  }
}
