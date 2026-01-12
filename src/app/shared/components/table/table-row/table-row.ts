import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Task } from '@core/models/table';
import { TaskService } from '@core/services/queue-task';
import { InitialsPipe } from '@shared/pipes/pipes';

@Component({
  selector: 'tr[appTableRow]',
  standalone: true,
  imports: [InitialsPipe],
  templateUrl: './table-row.html',
  styleUrl: './table-row.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowComponent {
  row = input.required<Task>();
}
