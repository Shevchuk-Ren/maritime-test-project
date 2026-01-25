import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DotsBarComponent } from '../dots-bar/dots-bar';

export type winType = 'Very Low' | 'Low' | 'Medium' | 'Strong' | 'Very Strong';

@Component({
  selector: 'app-winnability-bar',
  imports: [CommonModule, DotsBarComponent],
  templateUrl: './winnability-bar.html',
  styleUrl: './winnability-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnabilityBarComponent {
  winnability = input<winType>();
}
