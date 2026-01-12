import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  height = input<string>('48px');
  width = input<string>('48px');
  background = input<string>(
    'linear-gradient(135deg, rgba(30, 64, 175, 0.3), rgba(30, 64, 175, 0.5))',
  );
}
