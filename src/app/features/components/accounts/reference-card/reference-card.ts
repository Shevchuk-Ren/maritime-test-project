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

  iconUrl = input<string | undefined>();

  title = input<string | undefined>();
  dots = input<number[]>([]);

  linkUrl = input<string | undefined>();
  linkText = input<string>('See all factors');

  classes = computed(() => {
    const base = 'card';
    const v = `card__${this.variant()}`;

    return [base, v].join(' ').trim();
  });
}
