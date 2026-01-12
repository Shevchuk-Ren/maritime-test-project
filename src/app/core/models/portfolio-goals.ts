export type GoalKind = 'segmented' | 'money';

export type GoalStatusTone = 'good' | 'warn' | 'bad' | 'neutral';

export interface GoalMarker {
  /** 0..100 position on the bar */
  pct: number;
  /** label above/below marker (e.g., "TG:55%") */
  label: string;
  /** where the label should render */
  placement?: 'above' | 'below';
  /** marker color key */
  tone?: 'blue' | 'green' | 'muted';
}

export interface GoalSegment {
  /** width in percent (0..100). total should be 100 */
  value: number;
  /** color token key */
  tone: 'green' | 'yellow' | 'red' | 'muted';
}

export interface PortfolioGoalBase {
  id: string;
  title: string; // e.g. PORTFOLIO LOSS RATIO TARGET
  kind: GoalKind;
}

export interface SegmentedPortfolioGoal extends PortfolioGoalBase {
  kind: 'segmented';

  /** Big number printed inside bar (e.g. "48.2%") */
  actualTextInBar?: string;

  /** optional text below bar (e.g. "-6.8% (GOOD)") */
  statusText?: string;
  statusTone?: GoalStatusTone;

  segments: GoalSegment[];

  /** triangle markers like in SVG */
  targetMarker?: GoalMarker | null;
  actualMarker?: GoalMarker | null;

  /** for bar sizing */
  barHeightPx?: number; // default 25
  radiusPx?: number; // default 12.5
}

export interface MoneyPortfolioGoal extends PortfolioGoalBase {
  kind: 'money';

  currentText: string; // "$8.1M"
  targetText: string; // "$12M"
  pct: number; // 0..100

  barHeightPx?: number; // default 25
  radiusPx?: number; // default 12.5
}

export type PortfolioGoal = SegmentedPortfolioGoal | MoneyPortfolioGoal;
