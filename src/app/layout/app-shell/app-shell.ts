import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@core/services/user';
import { AvatarComponent } from '@shared/components/avatar/avatar';
import { NavigationComponent } from '@shared/components/navigation/navigation';
import { SearchInputComponent } from '@shared/components/search-input/search-input';
import { InitialsPipe } from '@shared/pipes/pipes';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    InitialsPipe,
    SearchInputComponent,
    AvatarComponent,
    FormsModule,
  ],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  protected userService = inject(UserService);
  globalSearch = '';

  onGlobalSearch(v: string) {
    this.globalSearch = v;
  }
}
