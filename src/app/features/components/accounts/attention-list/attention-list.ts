import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NeedsAttentionItem } from '@core/models/accounts/hero';
import { AddCardsComponent } from '@shared/components/add-cards/add-cards';

@Component({
  selector: 'app-attention-list',
  imports: [AddCardsComponent],
  templateUrl: './attention-list.html',
  styleUrl: './attention-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttentionListComponent {
  attentionList = input<NeedsAttentionItem[]>([
    {
      id: 1,
      title: 'Marine Survey Required',
      subtitle: 'Scheduled for 06/21/2025',
      actionText: 'Review details link →',
    },
    {
      id: 2,
      title: 'Loss Control Complete',
      subtitle: 'Last inspection 02/15/2025',
      actionText: 'View report →',
    },
    {
      id: 3,
      title: 'Claims Review Required',
      subtitle: '3 open claims / $245,000 TTL',
      actionText: 'View claims →',
    },
  ]);
}
