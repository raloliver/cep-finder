import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {
  EnvironmentProviders,
  LOCALE_ID,
  Provider,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

export const DEFAULT_LANGUAGE = 'pt';
export const DEFAULT_LOCALE = 'pt-BR';

export function provideTranslation(): (Provider | EnvironmentProviders)[] {
  registerLocaleData(localePt, DEFAULT_LOCALE);

  return [
    { provide: LOCALE_ID, useValue: DEFAULT_LOCALE },
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: 'i18n/', suffix: '.json' }),
      fallbackLang: DEFAULT_LANGUAGE,
      lang: DEFAULT_LANGUAGE,
    }),
    provideAppInitializer(() => firstValueFrom(inject(TranslateService).use(DEFAULT_LANGUAGE))),
  ];
}
