export interface NeedsAttentionItem {
  id: number;
  title: string;
  subtitle?: string;
  actionText?: string;
}

export interface Account {
  id: string;

  name: string;
  subtitle: string;

  line: string;
  broker: string;
  underwriter?: string;

  renewalDate: string;

  premium: string;
  ratedPremium: string;
  premiumGrowth?: number;
  currentPremium?: string;
  targetPremium?: string;

  lossRatio: number;
  targetRatio: number;
  appetite: string; // HIGH / MEDIUM / CAUTIOUS

  status: string;
  triage: number;

  winnability: 'Very Strong' | 'Strong' | 'Medium';
}
