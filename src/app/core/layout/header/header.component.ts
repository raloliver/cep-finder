import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

import { AppLink } from '@core/navigation/app.path';
import { NavMenu } from '@shared/ui/nav-menu/nav-menu.component';
import { APP_NAVIGATION } from '@core/navigation/app.navigation';

@Component({
  imports: [TranslatePipe, RouterLink, NavMenu],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class Header {
  protected readonly homeLink = AppLink.home;
  protected readonly navigation = APP_NAVIGATION;
}
