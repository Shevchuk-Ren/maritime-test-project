import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  imports: [CommonModule],
  templateUrl: './status-bar.html',
  styleUrl: './status-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBarComponent {
  status = input<string | undefined>();

  steps = ['Submitted', 'Review', 'Quote', 'Bind', 'Issue', 'Renew'];

  currentIndex = computed(() => {
    const status = this.status();
    return status? this.steps.indexOf(status) : -1;
  });
}
