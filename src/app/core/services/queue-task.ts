import { Injectable, signal, computed } from '@angular/core';
import { Task, TaskFilter } from '@core/models/table';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSignal = signal<Task[]>([
    {
      id: '1',
      originator: 'Sam Masters',
      initialsColor: 'bg-blue-600',
      client: 'NAMEX Tech Solutions',
      line: 'Cyber Liability',
      type: 'Underwriter Referral',
      status: 'new',
      created: '04/16/2025',
    },
    {
      id: '2',
      originator: 'Annalise Willis',
      initialsColor: 'bg-purple-600',
      client: 'Maritime Logistics Corp',
      line: 'Marine Cargo',
      type: 'Underwriter Referral',
      status: 'new',
      created: '04/20/2025',
    },
    {
      id: '3',
      originator: 'Patrick Davenport',
      initialsColor: 'bg-green-600',
      client: 'GreenField Energy Ltd',
      line: 'Environmental',
      type: 'Loss Control Request',
      status: 'new',
      created: '04/16/2025',
    },
    {
      id: '4',
      originator: 'Ana Killian',
      initialsColor: 'bg-orange-600',
      client: 'NorthStar Financial Group',
      line: 'D&O Liability',
      type: 'Underwriter Referral',
      status: 'pending',
      created: '04/22/2025',
    },
    {
      id: '5',
      originator: 'Ana Killian',
      initialsColor: 'bg-orange-600',
      client: 'Alliance Healthcare Systems',
      line: 'Medical Malpractice',
      type: 'Email',
      status: 'completed',
      created: '04/28/2025',
    },
    {
      id: '6',
      originator: 'Me',
      initialsColor: 'bg-blue-600',
      client: 'QuantumTech Industries',
      line: 'Product Liability',
      type: 'Email',
      status: 'completed',
      created: '04/20/2025',
    },
  ]);

  private activeFilterSignal = signal<'assigned' | 'pending' | 'referrals'>('assigned');

  readonly tasks = this.tasksSignal.asReadonly();
  readonly activeFilter = this.activeFilterSignal.asReadonly();

  readonly filters = signal<TaskFilter[]>([
    { category: 'assigned', count: 12 },
    { category: 'pending', count: 8 },
    { category: 'referrals', count: 3 },
  ]);

  readonly filteredTasks = computed(() => {
    const filter = this.activeFilterSignal();
    const allTasks = this.tasksSignal();

    switch (filter) {
      case 'assigned':
        return allTasks;
      case 'pending':
        return allTasks.filter((t) => t.status === 'pending');
      case 'referrals':
        return allTasks.filter((t) => t.type.includes('Referral'));
      default:
        return allTasks;
    }
  });

  setActiveFilter(filter: 'assigned' | 'pending' | 'referrals'): void {
    this.activeFilterSignal.set(filter);
  }

  addTask(task: Task): void {
    this.tasksSignal.update((tasks) => [...tasks, task]);
  }

  updateTaskStatus(taskId: string, status: Task['status']): void {
    this.tasksSignal.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, status } : task)),
    );
  }
}
