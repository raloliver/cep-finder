import { Component, input, output, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FormRoot, form } from '@angular/forms/signals';

import { ViaCepResponse, ViaCepSearch } from '@features/addresses/interfaces/via-cep.interface';
import { cepSearchSchema } from '@features/addresses/interfaces/via-cep.model';
import { TextField } from '@shared/ui/text-field/text-field.component';
import { Button } from '@shared/ui/button/button.component';

@Component({
  imports: [FormRoot, TranslatePipe, TextField, Button],
  selector: 'app-address-search-form',
  styleUrl: './address-search-form.component.scss',
  templateUrl: './address-search-form.component.html',
})
export class AddressSearchForm {
  readonly initialCepSearch = signal<ViaCepSearch>({ cep: '' });
  readonly address = input<ViaCepResponse | null>(null);
  readonly searchSubmitted = output<string>();
  protected readonly inputId = 'address-search-zip-code';

  readonly searchForm = form(this.initialCepSearch, cepSearchSchema, {
    submission: {
      action: async (field) => this.searchSubmitted.emit(field.cep().value()),
    },
  });
}
