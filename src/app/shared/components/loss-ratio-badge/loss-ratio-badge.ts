import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-loss-ratio-badge',
  imports: [],
  templateUrl: './loss-ratio-badge.html',
  styleUrl: './loss-ratio-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LossRatioBadgeComponent {
  lossRatio = input<number>(0);

  readonly lossTone = computed(() => {
    const ratio = this.lossRatio();
    if (ratio < 35) return 'good';
    if (ratio < 65) return 'warn';
    return 'bad';
  });
}
