export interface QueueTableColumn<T extends object = Record<string, unknown>> {
  key: keyof T;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  srOnlyTitle?: boolean;
}
export interface QueueTaskFilter {
  category: 'assigned' | 'pending' | 'referrals';
  count: number;
}

export type QueueTaskStatus = 'new' | 'pending' | 'completed';

export interface QueueTask {
  id: string;
  originator: string;
  initialsColor: string;
  client: string;
  line: string;
  type: string;
  status: QueueTaskStatus;
  created: string;
  actions?: string;
}
