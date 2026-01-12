import {
  ChangeDetectionStrategy,
  Component,
  input,
  inject,
  signal,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '@core/services/navigation';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  protected navigationService = inject(NavigationService);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  canScrollLeft = signal(false);
  canScrollRight = signal(false);
  showScrollControls = signal(false);

  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    queueMicrotask(() => this.updateScrollState());

    this.resizeObserver = new ResizeObserver(() => this.updateScrollState());
    this.resizeObserver.observe(this.scrollContainer.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  onScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    const container = this.scrollContainer?.nativeElement;
    if (!container) return;

    const hasOverflow = container.scrollWidth > container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    this.showScrollControls.set(hasOverflow);
    this.canScrollLeft.set(scrollLeft > 1);
    this.canScrollRight.set(scrollLeft < maxScroll - 1);
  }

  scrollLeft(): void {
    this.scrollContainer?.nativeElement?.scrollBy({ left: -280, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer?.nativeElement?.scrollBy({ left: 280, behavior: 'smooth' });
  }
}
