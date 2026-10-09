import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { AppLink } from '@core/navigation/app.path';
import { Button } from '@shared/ui/button/button.component';

@Component({
  imports: [TranslatePipe, Button],
  selector: 'app-home-page',
  styleUrl: './home-page.component.scss',
  templateUrl: './home-page.component.html',
})
export class HomePage {
  protected readonly searchLink = AppLink.addressSearch;
}
