import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
// import { TaskRowDirective } from './task-row.directive'; // підстав реальний шлях (те що дає appTaskRow)
import { TaskService } from '@core/services/queue-task';
import { Task } from '@core/models/table';
import { CustomTableComponent, TableCellTemplateDirective } from '@shared/components/table/table';
import { CommonModule } from '@angular/common';
import { TableService } from '@core/services/table';
import { ButtonComponent } from '@shared/components/button/button';
import { InitialsPipe } from '@shared/pipes/pipes';
import { QueueTableColumn, QueueTask } from '@core/models/work-queue';

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [
    CommonModule,
    CustomTableComponent,
    TableCellTemplateDirective,
    InitialsPipe,
    ButtonComponent,
  ],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkQueueComponent {
  constructor(
    public tasks: TaskService,
    public table: TableService<Task>,
  ) {
    effect(() => {
      this.table.setRows(this.tasks.tasks());
      this.applyFilter(this.tasks.activeFilter());
    });
  }

  columns: QueueTableColumn<QueueTask>[] = [
    { key: 'originator', label: 'Originator', width: '18%' },
    { key: 'client', label: 'Client/Line', width: '24%' },
    { key: 'type', label: 'Type', width: '20%' },
    { key: 'status', label: 'Status', width: '16%' },
    { key: 'created', label: 'Created', width: '14%' },
    { key: 'actions', label: 'Actions', width: '8%', align: 'right', srOnlyTitle: true },
  ];

  label(category: 'assigned' | 'pending' | 'referrals') {
    if (category === 'assigned') return 'Assigned to me';
    if (category === 'pending') return 'Pending Review';
    return 'Referrals';
  }

  setTab(category: 'assigned' | 'pending' | 'referrals') {
    this.tasks.setActiveFilter(category);
    this.applyFilter(category);
  }

  private applyFilter(category: 'assigned' | 'pending' | 'referrals') {
    if (category === 'assigned') {
      this.table.reset();
      return;
    }

    if (category === 'pending') {
      this.table.filterBy((t) => t.status === 'pending');
      return;
    }

    this.table.filterBy((t) => t.type.includes('Referral'));
  }

  statusLabel(status: Task['status']): string {
    switch (status) {
      case 'new':
        return 'New';
      case 'pending':
        return 'Pending Review';
      case 'completed':
        return 'Completed';
      default:
        return String(status);
    }
  }

  statusDotClass(status: Task['status']): string {
    switch (status) {
      case 'new':
        return 'wq-dot--blue';
      case 'pending':
        return 'wq-dot--yellow';
      case 'completed':
        return 'wq-dot--green';
      default:
        return 'wq-dot--gray';
    }
  }

  onRowActions(task: Task): void {
    console.log(task);
  }
}
