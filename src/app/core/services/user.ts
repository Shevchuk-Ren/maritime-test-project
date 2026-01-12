import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly totalOpenTasks = computed(() => 12);
  readonly userName = signal('Arthur');
}
