import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SegmentedPortfolioGoal } from '@core/models/portfolio-goals';

@Component({
  selector: 'app-segmented-goal-bar',
  standalone: true,
  templateUrl: './segmented-goals-bar.html',
  styleUrl: './segmented-goals-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedGoalBarComponent {
  goal = input.required<SegmentedPortfolioGoal>();

  barH = computed(() => this.goal().barHeightPx ?? 25);
  r = computed(() => this.goal().radiusPx ?? 12.5);

  // Clamp helpers (avoid overflow)
  clampPct(p: number): number {
    return Math.max(0, Math.min(100, p));
  }
}
