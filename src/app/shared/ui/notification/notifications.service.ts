import { inject, Service } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

const NOTIFICATION_DURATION_MS = 4000;
type Notification = 'success' | 'error';

@Service()
export class Notifications {
  private readonly snackBar = inject(MatSnackBar);
  private readonly translate = inject(TranslateService);

  success(messageKey: string): void {
    this.open(messageKey, 'success');
  }

  error(messageKey: string): void {
    this.open(messageKey, 'error');
  }

  private open(messageKey: string, notificationType: Notification): void {
    this.snackBar.open(
      this.translate.instant(messageKey),
      this.translate.instant('notifications.dismiss'),
      {
        duration: NOTIFICATION_DURATION_MS,
        panelClass: ['app-notification', `app-notification--${notificationType}`],
        politeness: notificationType === 'error' ? 'assertive' : 'polite',
      },
    );
  }
}
