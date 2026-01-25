import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccountHeroComponent } from '@features/components/accounts/account-hero/account-hero';
import { AttentionListComponent } from '@features/components/accounts/attention-list/attention-list';
import { PerfomanceMetricsComponent } from '@features/components/accounts/perfomance-metrics/perfomance-metrics';
import { PortfolioGoalsComponent } from '@features/components/dashboard/portfolio-goals/portfolio-goals';
import { AddCardsComponent } from '@shared/components/add-cards/add-cards';
import { PolicyListComponent } from '@features/components/accounts/policy-list/policy-list';
import { StatusBarComponent } from '@shared/components/status-bar/status-bar';

@Component({
  selector: 'app-accounts',
  imports: [
    AccountHeroComponent,
    AttentionListComponent,
    PerfomanceMetricsComponent,
    AddCardsComponent,
    PolicyListComponent,
    StatusBarComponent,
  ],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsPage {
  currentAccount = input<string | null>('Maritime Logistics Corp');

  meta = [
    {
      id: '3',
      name: 'Maritime Logistics Corp',
      subtitle: 'Shipping/Logistics',
      line: 'Marine Cargo',
      broker: 'Marsh McLennan',
      renewalDate: '09/05/2025',
      premiumGrowth: {
        increase: 12.4,
        current: '$123M',
        target: '$150M',
      },
      ratedPremium: '$920K',
      lossRatio: 25,
      targetRatio: 42,
      appetite: 'HIGH',
      status: 'Active',
      triage: 182,
      winnability: 'Very Strong',
      underwriter: 'Kate Johnson',
      policies: [
        {
          id: 1,
          label: 'Marine Cargo',
          premium: '$625,000',
          effDate: '06/30/2026',
          distribution: 71.4,
          iconUrl: 'assets/icons/policy/marine-cargo.svg',
        },
        {
          id: 2,
          label: 'General Liability',
          premium: '$175,000',
          effDate: '06/30/2026',
          distribution: 20,
          iconUrl: 'assets/icons/policy/general-liability.svg',
        },
        {
          id: 3,
          label: 'Workers Comp',
          premium: '$75,000',
          effDate: '---',
          distribution: 8.6,
          iconUrl: 'assets/icons/policy/workers-comp.svg',
        },
        {
          id: 4,
          label: 'Property',
          premium: '$64,829.83',
          effDate: '---',
          iconUrl: 'assets/icons/policy/property.svg',
        },
        {
          id: 5,
          label: 'Umbrella',
          premium: '$275,000',
          effDate: '13/03/2026',
          iconUrl: 'assets/icons/policy/umbrella.svg',
        },
      ],
    },
  ];

  selectedId = '3';

  get selectedAccount() {
    return this.meta.find((x) => x.id === this.selectedId);
  }
}
