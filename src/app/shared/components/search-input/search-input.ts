import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSearchService } from '@core/services/input-search';

@Component({
  selector: 'app-serch-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements ControlValueAccessor {
  constructor(private inputService: InputSearchService) {
    effect(() => {
      const externalValue = (this.inputService.value() ?? '').toString();
      if (externalValue !== this.value()) {
        this.value.set(externalValue);
        this.onChange(externalValue);
      }

      // const externalValue = this.inputService.value();
      // if (externalValue !== this.value()) {
      //   this.value.set(externalValue);
      //   this.onChange(externalValue);
      // }
    });
  }

  placeholder = input<string>('');
  type = input<string>('text');

  height = input<string>('27px');
  minWidth = input<string>('250px');
  border = input<string>('1px solid var(--input-border)');
  background = input<string | null>(null);
  fontSize = input<string | null>(null);

  value = signal<string>('');

  private onChange = (value: any) => {};
  protected onTouched = () => {};

  writeValue(value: any): void {
    this.value.set((value ?? '').toString());
    console.log(value, 'write value');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log(fn, 'register on value');
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    console.log(fn, 'register on tauched');
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this.onChange(target.value);

    this.inputService.setValue(target.value);
  }
}
