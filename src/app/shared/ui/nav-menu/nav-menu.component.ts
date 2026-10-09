import { Component, computed, inject, input } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { Icon } from '@shared/ui/icon/icon.component';
import { NavItem } from './nav-menu.interface';

@Component({
  imports: [
    MatButton,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    Icon,
  ],
  selector: 'app-nav-menu',
  styleUrl: './nav-menu.component.scss',
  templateUrl: './nav-menu.component.html',
})
export class NavMenu {
  readonly items = input.required<readonly NavItem[]>();
  readonly ariaLabel = input.required<string>();
  readonly openMenuLabel = input.required<string>();

  private readonly router = inject(Router);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly flatItems = computed(() =>
    this.items().flatMap((item) => (item.children?.length ? item.children : [item])),
  );

  protected isActive(item: NavItem): boolean {
    return this.currentUrl().startsWith(item.link);
  }
}
