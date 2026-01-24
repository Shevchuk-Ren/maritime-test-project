import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  title = input<string | null>(null);

  value = input<number>(0);
  currentSum = input<number>(0);
  targetSum = input<number>(0);
  showDetails = input<boolean>(true);

  width = input<string>('100%');
  height = input<string>('25px');
  background = input<string>('#313853');
  borderRadius = input<string>('0 20px 20px 0');

  fillColor = input<string>('linear-gradient(90deg, #313853, #3B82F6');
  fillBorder = input<string>('0 20px 20px 0');

  fillWidth = computed(() => `${this.value()}%`);
  sumToString = computed(() => `$${this.currentSum()}М`);
  targetToString = computed(() => `$${this.targetSum()}М`);
}
