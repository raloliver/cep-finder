import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideTranslation } from '@core/i18n/translation.providers';
import { TranslatedTitleStrategy } from '@core/navigation/translated-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideTranslation(),
    { provide: TitleStrategy, useClass: TranslatedTitleStrategy },
  ],
};
