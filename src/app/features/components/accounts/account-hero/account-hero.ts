import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-account-hero',
  imports: [],
  templateUrl: './account-hero.html',
  styleUrl: './account-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountHeroComponent {
  title = input<string>('');

  addressLine1 = input<string>('425 Harbor Boulevard, Suite 300');
  addressLine2 = input<string>('Seattle, WA 98104');

  meta = input<any[]>([
    { id: 1, label: 'EXISTING ACCOUNT', value: '54383' },
    { id: 2, label: 'BROKER', value: 'Marsh McLennan' },
    { id: 3, label: 'UNDERWRITER', value: 'Kate Johnson' },
  ]);
}
