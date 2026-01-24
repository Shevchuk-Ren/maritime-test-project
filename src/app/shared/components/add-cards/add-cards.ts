import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-cards',
  imports: [CommonModule],
  templateUrl: './add-cards.html',
  styleUrl: './add-cards.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCardsComponent {
  title = input<string>('');
  padding = input<string>('26px');
  background = input<string>('#1E2233');
  border = input<string | null>('1px solid var(--stroke)');
}
