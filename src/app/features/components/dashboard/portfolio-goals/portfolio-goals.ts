import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioGoalsService } from '@core/services/portfolio-goals';
import { MoneyGoalBarComponent } from '@shared/components/money-goal-bar/money-goal-bar';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar';
import { SegmentedGoalBarComponent } from '@shared/components/segmented-goals-bar/segmented-goals-bar';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [ProgressBarComponent, SegmentedGoalBarComponent],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioGoalsComponent {
  constructor(public goals: PortfolioGoalsService) {}
}
