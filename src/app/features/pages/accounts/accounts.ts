import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsPage {}
