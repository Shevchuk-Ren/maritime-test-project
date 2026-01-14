import { ChangeDetectionStrategy, Component, effect, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { AccountRow, AccountTableColumn } from '@core/models/my-accounts';
import { InputSearchService } from '@core/services/input-search';
import { MyAccountsService } from '@core/services/my-accounts';
import { ButtonComponent } from '@shared/components/button/button';
import { LossRatioBadgeComponent } from '@shared/components/loss-ratio-badge/loss-ratio-badge';
import { SearchInputComponent } from '@shared/components/search-input/search-input';
import { StatusBadgesComponent } from '@shared/components/status-badges/status-badges';
import { CustomTableComponent, TableCellTemplateDirective } from '@shared/components/table/table';
import { WinnabilityBarComponent } from '@shared/components/winnability-bar/winnability-bar';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [
    CustomTableComponent,
    TableCellTemplateDirective,
    SearchInputComponent,
    ButtonComponent,
    FormsModule,
    WinnabilityBarComponent,
    StatusBadgesComponent,
    LossRatioBadgeComponent,
  ],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [InputSearchService],
})
export class MyAccountsComponent implements OnInit {
  constructor(public accounts: MyAccountsService) {}

  columns: AccountTableColumn<AccountRow>[] = [
    { key: 'name', label: 'Account Name/Type', width: '16%' },
    { key: 'line', label: 'Line', width: '12%' },
    { key: 'broker', label: 'Broker', width: '9%' },
    { key: 'renewalDate', label: 'Renewal Date', width: '8%' },
    { key: 'premium', label: 'Premium', width: '6%' },
    { key: 'ratedPremium', label: 'Rated Premium', width: '9%' },
    { key: 'lossRatio', label: 'Loss Ratio', width: '9%' },
    { key: 'appetite', label: 'Appetite', width: '9%' },
    { key: 'status', label: 'Status', width: '9%' },
    { key: 'triage', label: 'Triage', width: '5%' },
    { key: 'winnability', label: 'Winnability', width: '14%' },
    { key: 'actions', label: 'Actions', width: '6%', align: 'right', srOnlyTitle: true },
  ];

  search = new FormControl('');

  ngOnInit(): void {
    this.accounts.resetView();
  }

  onSearch(v: any) {
    this.search = v;
    this.accounts.setSearch(v);

    if (!v || v.trim() === '') {
      this.accounts.resetView();
    }
  }

  onFilterClick(): void {
    this.accounts.toggleFilter();
  }

  onSortClick(): void {
    this.accounts.toggleSort();
  }

  onGroupClick(): void {
    this.accounts.toggleGroup();
  }

  onRowActions(account: AccountRow): void {
    console.log(account);
  }
}
