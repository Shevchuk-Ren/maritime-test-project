import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar';
import { ReferenceCardComponent } from '../reference-card/reference-card';

@Component({
  selector: 'app-perfomance-metrics',
  imports: [ProgressBarComponent, ReferenceCardComponent],
  templateUrl: './perfomance-metrics.html',
  styleUrl: './perfomance-metrics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfomanceMetricsComponent {
  data = input<any>();

  hasDistribution = (p: any) => !!p?.distribution;
}
