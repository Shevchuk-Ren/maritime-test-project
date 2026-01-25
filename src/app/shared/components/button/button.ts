import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { NgStyle } from '@angular/common';

export type ButtonVariant = 'primary' | 'outline' | 'tab' | 'action';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  variant = input<ButtonVariant>('outline');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);

  /** dynamic sizing */
  widthPx = input<string | undefined>();
  heightPx = input<number | undefined>();
  paddingX = input<number | undefined>();
  radiusPx = input<number | undefined>();
  fontSize = input<number | undefined>();

  /** dynamic colors (optional) */
  bg = input<string | undefined>();
  border = input<string | undefined>();
  text = input<string | undefined>();

  clicked = output<void>();

  classes = computed(() => {
    const base = 'btn';
    const v = `btn--${this.variant()}`;
    const dis = this.disabled() ? 'btn--disabled' : '';
    return [base, v, dis].join(' ').trim();
  });

  style = computed(() => {
    const s: Record<string, string> = {};

    // if (this.widthPx() != undefined) s['width'] = `${this.widthPx()}`;
    if (this.widthPx()) s['width'] = `${this.widthPx()}`;
    if (this.heightPx()) s['height'] = `${this.heightPx()}px`;
    if (this.paddingX()) s['padding-left'] = s['padding-right'] = `${this.paddingX()}px`;
    if (this.radiusPx()) s['border-radius'] = `${this.radiusPx()}px`;
    if (this.fontSize()) s['font-size'] = `${this.fontSize()}px`;

    if (this.bg()) s['background'] = this.bg()!;
    if (this.border()) s['border-color'] = this.border()!;
    if (this.text()) s['color'] = this.text()!;

    return s;
  });

  onClick(): void {
    console.log('click');
    if (!this.disabled()) this.clicked.emit();
  }
}
