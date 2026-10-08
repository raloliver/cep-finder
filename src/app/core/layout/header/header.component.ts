import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

import { AppLink } from '@core/navigation/app.path';

@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class Header {
  protected readonly homeLink = AppLink.home;
}
