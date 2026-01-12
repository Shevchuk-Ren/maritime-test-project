import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { TaskService } from '@core/services/queue-task';
import { ButtonComponent } from '@shared/components/button/button';

export interface itemListInt {
  id: number;
  title: string;
}

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickActions {
  constructor(public tasks: TaskService) {}

  itemList = signal<itemListInt[]>([
    {
      id: 1,
      title: 'New submission',
    },
    {
      id: 2,
      title: 'Quote Builder',
    },
    {
      id: 3,
      title: 'Risk Models',
    },
    {
      id: 4,
      title: 'Documents Upload',
    },
  ]);
}
