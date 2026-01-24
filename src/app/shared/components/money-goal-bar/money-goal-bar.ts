import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MoneyPortfolioGoal } from '@core/models/dashboard/portfolio-goals';

@Component({
  selector: 'app-money-goal-bar',
  standalone: true,
  templateUrl: './money-goal-bar.html',
  styleUrl: './money-goal-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyGoalBarComponent {
  goal = input.required<MoneyPortfolioGoal>();

  barH = computed(() => this.goal().barHeightPx ?? 25);
  r = computed(() => this.goal().radiusPx ?? 12.5);

  clampPct(p: number): number {
    return Math.max(0, Math.min(100, p));
  }

  /** label closer to center like SVG: keep within [20..80] range */
  valueLabelPct(): number {
    const p = this.clampPct(this.goal().pct);
    return Math.max(20, Math.min(80, p));
  }
}
