import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-reference-card',
  imports: [],
  templateUrl: './reference-card.html',
  styleUrl: './reference-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceCardComponent {
  variant = input<'basic' | 'grey'>('basic');

  iconUrl = input<string | null>(null);

  title = input<string | null>(null);
  dots = input<number[]>([]);

  linkUrl = input<string | null>(null);
  linkText = input<string>('See all factors');

  classes = computed(() => {
    const base = 'card';
    const v = `card__${this.variant()}`;

    return [base, v].join(' ').trim();
  });
}
