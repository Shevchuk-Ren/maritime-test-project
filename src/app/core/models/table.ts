export type UiTableAlign = 'left' | 'right' | 'center';

export interface UiTableColumn {
  key: string;
  title?: string;
  width?: string;
  align?: UiTableAlign;
  srOnlyTitle?: boolean;
}

export interface TaskFilter {
  category: 'assigned' | 'pending' | 'referrals';
  count: number;
}

export type TaskStatus = 'new' | 'pending' | 'completed';

export interface Task {
  id: string;
  originator: string;
  initialsColor: string;
  client: string;
  line: string;
  type: string;
  status: TaskStatus;
  created: string;
  actions?: string;
}

export interface TableColumn<T extends object = Record<string, unknown>> {
  key: keyof T;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  srOnlyTitle?: boolean;
}

export type TableRow = Record<string, unknown>;
