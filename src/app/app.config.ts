import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideTranslation } from '@core/i18n/translation.providers';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideTranslation()],
};
