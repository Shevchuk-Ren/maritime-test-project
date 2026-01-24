import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReferenceCardComponent } from '../reference-card/reference-card';

@Component({
  selector: 'app-policy-list',
  imports: [ReferenceCardComponent],
  templateUrl: './policy-list.html',
  styleUrl: './policy-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyListComponent {
  data = input<any>([]);
}
