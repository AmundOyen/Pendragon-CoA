import { TestBed } from '@angular/core/testing';
import { Theme } from './theme';

describe('Theme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.style.colorScheme = '';
  });

  it('should restore the stored scheme', () => {
    localStorage.setItem('color-scheme', 'dark');
    const theme = TestBed.inject(Theme);
    expect(theme.scheme()).toBe('dark');
  });

  it('should toggle, apply and persist the scheme', () => {
    localStorage.setItem('color-scheme', 'light');
    const theme = TestBed.inject(Theme);

    theme.toggle();
    TestBed.tick();

    expect(theme.scheme()).toBe('dark');
    expect(document.body.style.colorScheme).toBe('dark');
    expect(localStorage.getItem('color-scheme')).toBe('dark');
  });
});
