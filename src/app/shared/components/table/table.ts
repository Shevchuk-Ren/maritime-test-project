import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  effect,
  input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { TableColumn, TableRow } from '@core/models/table';
import { TableService } from '@core/services/table';

@Directive({
  selector: 'ng-template[tableCell]',
  standalone: true,
})
export class TableCellTemplateDirective {
  tableCell = input.required<string>(); // column key
  constructor(public tpl: TemplateRef<any>) {}
}

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [NgStyle, NgTemplateOutlet],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableService],
})
export class CustomTableComponent<T extends object = Record<string, unknown>> {
  columns = input<TableColumn<T>[]>([]);
  data = input<T[]>([]);

  minWidth = input<string | null>(null);
  striped = input<boolean>(true);
  fixedLayout = input<boolean>(true);

  constructor(public tableService: TableService<T>) {
    effect(() => this.tableService.setRows(this.data()));
  }

  @ContentChildren(TableCellTemplateDirective)
  private cellTemplates!: QueryList<TableCellTemplateDirective>;

  tableStyle = () => {
    const mw = this.minWidth();
    return mw ? { 'min-width': mw } : {};
  };

  keyToString(key: unknown): string {
    return typeof key === 'string' ? key : String(key);
  }

  getCellTpl(key: string): TemplateRef<any> | null {
    const found = this.cellTemplates?.find((t) => t.tableCell() === key);
    return found?.tpl ?? null;
  }

  cellValue(row: any, key: string): string {
    const v = row?.[key];
    if (v === null || v === undefined) return '';
    return String(v);
  }
}
