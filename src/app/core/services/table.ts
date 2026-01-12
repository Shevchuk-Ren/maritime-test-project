import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TableService<T extends object = Record<string, unknown>> {
  private rowsSignal = signal<T[]>([]);
  private predicateSignal = signal<((row: T) => boolean) | null>(null);

  readonly rows = this.rowsSignal.asReadonly();

  readonly filteredRows = computed(() => {
    const rows = this.rowsSignal();
    const pred = this.predicateSignal();
    return pred ? rows.filter(pred) : rows;
  });

  setRows(data: T[]) {
    this.rowsSignal.set(data ?? []);
  }

  filterBy(predicate: (row: T) => boolean) {
    this.predicateSignal.set(predicate);
  }

  reset() {
    this.predicateSignal.set(null);
  }
}
