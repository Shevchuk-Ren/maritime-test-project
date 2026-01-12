import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true,
})
export class InitialsPipe implements PipeTransform {
  transform(fullName: string | null | undefined): string {
    if (!fullName) return '';

    return fullName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0] ?? '')
      .join('')
      .toUpperCase();
  }
}
