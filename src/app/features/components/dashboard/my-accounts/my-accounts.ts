import { ChangeDetectionStrategy, Component, effect, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { AccountRow, AccountTableColumn } from '@core/models/my-accounts';
import { InputSearchService } from '@core/services/input-search';
import { MyAccountsService } from '@core/services/my-accounts';
import { ButtonComponent } from '@shared/components/button/button';
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
    { key: 'line', label: 'Line', width: '11%' },
    { key: 'broker', label: 'Broker', width: '10%' },
    { key: 'renewalDate', label: 'Renewal Date', width: '8%' },
    { key: 'premium', label: 'Premium', width: '6%' },
    { key: 'ratedPremium', label: 'Rated Premium', width: '6%' },
    { key: 'lossRatio', label: 'Loss Ratio', width: '6%' },
    { key: 'appetite', label: 'Appetite', width: '9%' },
    { key: 'status', label: 'Status', width: '10%' },
    { key: 'triage', label: 'Triage', width: '5%' },
    { key: 'winnability', label: 'Winnability', width: '14%' },
    { key: 'actions', label: 'Actions', width: '8%', align: 'right', srOnlyTitle: true },
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

  lossTone(loss: number): 'good' | 'warn' | 'bad' {
    if (loss < 50) return 'good';
    if (loss < 70) return 'warn';
    return 'bad';
  }

  onRowActions(account: AccountRow): void {
    console.log(account);
  }
}
