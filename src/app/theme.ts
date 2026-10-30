import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type ColorScheme = 'light' | 'dark';

const STORAGE_KEY = 'color-scheme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);

  readonly scheme = signal<ColorScheme>(this.initialScheme());

  constructor() {
    effect(() => {
      const scheme = this.scheme();
      this.document.body.style.colorScheme = scheme;
      try {
        localStorage.setItem(STORAGE_KEY, scheme);
      } catch {
        // Storage can be unavailable (e.g. private mode); the toggle still works for this session
      }
    });
  }

  toggle(): void {
    this.scheme.update((scheme) => (scheme === 'dark' ? 'light' : 'dark'));
  }

  private initialScheme(): ColorScheme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // Fall through to the system preference
    }
    return this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}
