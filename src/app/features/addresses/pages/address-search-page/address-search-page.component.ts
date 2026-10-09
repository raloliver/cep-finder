import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { ViaCep } from '@features/addresses/services/via-cep.service';
import { ViaCepAddressResponse } from '@features/addresses/interfaces/via-cep-response.interface';
import { Button } from '@shared/ui/button/button.component';
@Component({
  imports: [TranslatePipe, JsonPipe, Button],
  selector: 'app-address-search-page',
  styleUrl: './address-search-page.component.scss',
  templateUrl: './address-search-page.component.html',
})
export class AddressSearchPage {
  address!: ViaCepAddressResponse;
  private readonly viaCepService = inject(ViaCep);
  private searchSubscription = Subscription.EMPTY;

  protected search(zipCode: string): void {
    this.searchSubscription = this.viaCepService.findByZipCode(zipCode).subscribe({
      next: (address) => {
        this.address = address;
      },
    });
  }
}
