import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { finalize, Subscription } from 'rxjs';

import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';
import { CepNotFoundError } from '@features/addresses/interfaces/via-cep.model';
import { AddressSearchForm } from '@features/addresses/components/address-search-form/address-search-form.component';
import { ViaCep } from '@features/addresses/services/via-cep.service';
import { Notifications } from '@shared/ui/notification/notifications.service';
@Component({
  imports: [TranslatePipe, AddressSearchForm],
  selector: 'app-address-search-page',
  styleUrl: './address-search-page.component.scss',
  templateUrl: './address-search-page.component.html',
})
export class AddressSearchPage {
  protected readonly address = signal<ViaCepResponse | null>(null);
  protected readonly searching = signal(false);

  private readonly viaCepService = inject(ViaCep);
  private readonly notifications = inject(Notifications);
  private searchSubscription = Subscription.EMPTY;

  protected search(cep: string): void {
    this.clear();
    this.searching.set(true);

    this.searchSubscription = this.viaCepService
      .findByCep(cep)
      .pipe(finalize(() => this.searching.set(false)))
      .subscribe({
        next: (address) => {
          this.address.set(address);
          this.notifications.success('addresses.notifications.found');
        },
        error: (error: unknown) =>
          this.notifications.error(
            error instanceof CepNotFoundError
              ? error.message
              : 'addresses.notifications.searchFailed',
          ),
      });
  }

  protected clear(): void {
    this.address.set(null);
    this.searchSubscription.unsubscribe();
  }
}
