import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { WorkQueueComponent } from '@features/components/dashboard/work-queue/work-queue';
import { AddCardsComponent } from '@shared/components/add-cards/add-cards';
import { PortfolioGoalsComponent } from '@features/components/dashboard/portfolio-goals/portfolio-goals';
import { QuickActions } from '@features/components/dashboard/quick-actions/quick-actions';
import { MyAccountsComponent } from '@features/components/dashboard/my-accounts/my-accounts';
import { MarketInteligenceComponent } from '@features/components/dashboard/market-inteligence/market-inteligence';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddCardsComponent,
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActions,
    MyAccountsComponent,
    MarketInteligenceComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}
