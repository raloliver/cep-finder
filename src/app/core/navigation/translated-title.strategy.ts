import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly translate = inject(TranslateService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const appTitle = this.translate.instant('app.title');
    const pageTitleKey = this.buildTitle(snapshot);

    this.title.setTitle(
      pageTitleKey ? `${this.translate.instant(pageTitleKey)} | ${appTitle}` : appTitle,
    );
  }
}
