import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type winType = 'Very Low' | 'Low' | 'Medium' | 'Strong' | 'Very Strong';

@Component({
  selector: 'app-winnability-bar',
  imports: [CommonModule],
  templateUrl: './winnability-bar.html',
  styleUrl: './winnability-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnabilityBarComponent {
  winnability = input<winType | any>();

  readonly totalDots = 4;
  readonly dots = [1, 2, 3, 4] as const;

  readonly activeDots = computed(() => {
    switch (this.winnability()) {
      case 'Very Strong':
        return 4;
      case 'Strong':
        return 3;
      case 'Medium':
        return 2;
      case 'Low':
        return 1;
      case 'Very Low':
        return 0;
      default:
        return 0;
    }
  });
}
