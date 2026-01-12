// import { ChangeDetectionStrategy, Component, input } from '@angular/core';
// import { CommonModule, NgClass } from '@angular/common';
// import { ɵEmptyOutletComponent } from "@angular/router";

// @Component({
//   selector: 'app-button',
//   imports: [NgClass, CommonModule, ɵEmptyOutletComponent],
//   templateUrl: './button.html',
//   styleUrl: './button.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class ButtonComponent {
//   height = input<string>('fit-content');
//   width = input<string>('27px');
//   background = input<string>('#1E2233');
//   border = input<string>('1px solid #3B82F6');
//   role = input<string>('tab');

//   icon = input<string | null>(null);
// }
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
  widthPx = input<string | null>(null);
  heightPx = input<number | null>(null);
  paddingX = input<number | null>(null);
  radiusPx = input<number | null>(null);
  fontSize = input<number | null>(null);

  /** dynamic colors (optional) */
  bg = input<string | null>(null);
  border = input<string | null>(null);
  text = input<string | null>(null);

  clicked = output<void>();

  classes = computed(() => {
    const base = 'btn';
    const v = `btn--${this.variant()}`;
    const dis = this.disabled() ? 'btn--disabled' : '';
    return [base, v, dis].join(' ').trim();
  });

  style = computed(() => {
    const s: Record<string, string> = {};

    if (this.widthPx() != null) s['width'] = `${this.widthPx()}`;
    if (this.heightPx() != null) s['height'] = `${this.heightPx()}px`;
    if (this.paddingX() != null) s['padding-left'] = s['padding-right'] = `${this.paddingX()}px`;
    if (this.radiusPx() != null) s['border-radius'] = `${this.radiusPx()}px`;
    if (this.fontSize() != null) s['font-size'] = `${this.fontSize()}px`;

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
