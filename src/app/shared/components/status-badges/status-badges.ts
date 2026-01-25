import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type statusType = 'New' | 'Pending Review' | 'Under Review' | 'Completed' | 'Active';

@Component({
  selector: 'app-status-badges',
  imports: [CommonModule],
  templateUrl: './status-badges.html',
  styleUrl: './status-badges.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgesComponent {
  status = input<statusType | string>('new');
  background = input<string | undefined>();

  readonly activeDots = computed(() => {
    switch (this.status()) {
      case 'new':
        return { color: '#3B82F6', status: 'New' };
      case 'pending':
        return { color: '#FDD261', status: 'Pending Review' };
      case 'Under review':
        return { color: '#1E40AF', status: 'Under Review' };
      case 'completed':
        return { color: '#3BB979', status: 'Completed' };
      case 'Active':
        return { color: '#3BB979', status: 'Active' };
      default:
        return { color: '#596275', status: 'Default' };
    }
  });
}
