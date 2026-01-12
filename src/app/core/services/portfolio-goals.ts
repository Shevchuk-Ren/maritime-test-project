import { Injectable, computed, signal } from '@angular/core';
import { PortfolioGoal } from '@core/models/portfolio-goals';

@Injectable({ providedIn: 'root' })
export class PortfolioGoalsService {
  private goalsSignal = signal<PortfolioGoal[]>([
    {
      id: 'g1',
      kind: 'segmented',
      title: 'PORTFOLIO LOSS RATIO TARGET',
      segments: [
        { value: 48, tone: 'green' },
        { value: 27, tone: 'yellow' },
        { value: 25, tone: 'red' },
      ],
      targetMarker: { pct: 55, label: 'TG:55%', placement: 'above', tone: 'blue' },
      actualMarker: { pct: 48.2, label: '-6.8% (GOOD)', placement: 'below', tone: 'green' },
      actualTextInBar: '48.2%',
      statusText: '-6.8% (GOOD)',
      statusTone: 'good',
      barHeightPx: 25,
      radiusPx: 12.5,
    },
    {
      id: 'g2',
      kind: 'segmented',
      title: 'RENEWAL RETENTION',
      segments: [
        { value: 15, tone: 'red' },
        { value: 35, tone: 'yellow' },
        { value: 30, tone: 'green' },
        { value: 20, tone: 'yellow' },
      ],
      targetMarker: { pct: 88, label: 'TG:85-90%', placement: 'above', tone: 'blue' },

      actualMarker: { pct: 88, label: 'ON TARGET', placement: 'below', tone: 'green' },
      actualTextInBar: '88%',
      statusText: 'ON TARGET',
      statusTone: 'good',
      barHeightPx: 25,
      radiusPx: 12.5,
    },
    {
      id: 'g3',
      kind: 'money',
      title: 'NEW BUSINESS TARGET',
      currentText: '$8.1M',
      targetText: '$12M',
      pct: 68,
      barHeightPx: 25,
      radiusPx: 12.5,
    },
    {
      id: 'g4',
      kind: 'money',
      title: 'ANNUAL GWP TARGET',
      currentText: '$28.4M',
      targetText: '$42M',
      pct: 68,
      barHeightPx: 25,
      radiusPx: 12.5,
    },
  ]);

  readonly goals = this.goalsSignal.asReadonly();

  readonly segmentedGoals = computed(() => this.goals().filter((g) => g.kind === 'segmented'));
  readonly moneyGoals = computed(() => this.goals().filter((g) => g.kind === 'money'));
}
