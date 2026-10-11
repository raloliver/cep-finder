import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';
import { AddressSearchForm } from '@features/addresses/components/address-search-form/address-search-form.component';
import { ViaCep } from '@features/addresses/services/via-cep.service';
@Component({
  imports: [TranslatePipe, JsonPipe, AddressSearchForm],
  selector: 'app-address-search-page',
  styleUrl: './address-search-page.component.scss',
  templateUrl: './address-search-page.component.html',
})
export class AddressSearchPage {
  address!: ViaCepResponse;
  private readonly viaCepService = inject(ViaCep);
  private searchSubscription = Subscription.EMPTY;

  protected search(cep: string): void {
    this.searchSubscription = this.viaCepService.findByCep(cep).subscribe({
      next: (address) => {
        this.address = address;
      },
    });
  }
}
