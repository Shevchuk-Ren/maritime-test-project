import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputSearchService {
  value = signal<string>('');

  debounce(fn: (v: string) => void, delay = 300) {
    let timer: any;
    console.log(fn, 'debounce');
    return (value: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(value));
      console.log(timer, 'debounce timer');
    };
  }

  setValue(v: string) {
    console.log(v, 'set Value input');
    this.value.set(v);
  }

  clear() {
    this.value.set('');
  }
}
