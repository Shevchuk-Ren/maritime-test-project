import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type PillsType = 'default' | 'triage' | 'appetite';

@Component({
  selector: 'app-custom-pill',
  imports: [CommonModule],
  templateUrl: './custom-pill.html',
  styleUrl: './custom-pill.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPillComponent {
  title = input<string>('');

  variant = input<PillsType>('default');
}
