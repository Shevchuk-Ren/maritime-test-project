export type AccountStatus = 'Active' | 'Under review';

export interface AccountTableColumn<T extends object = Record<string, unknown>> {
  key: keyof T;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  srOnlyTitle?: boolean;
}

export interface AccountRow {
  id: string;

  name: string;
  subtitle: string;

  line: string;
  broker: string;

  renewalDate: string;

  premium: string;
  ratedPremium: string;

  lossRatio: number; // e.g. 32, 38, 67
  appetite: string; // HIGH / MEDIUM / CAUTIOUS

  status: AccountStatus;
  triage: number;

  winnability: 'Very Strong' | 'Strong' | 'Medium';

  actions?: string;
}

export type AccountColumnKey = keyof AccountRow | 'actions';

export type TableAlign = 'left' | 'center' | 'right';

export type TableColumnKey<T extends object> = keyof T | 'actions';

export interface TableColumn<T extends object = Record<string, unknown>> {
  key: TableColumnKey<T>;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  srOnlyTitle?: boolean;
}
