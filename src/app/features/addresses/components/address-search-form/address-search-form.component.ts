import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FormRoot, form } from '@angular/forms/signals';

import { ViaCepSearch } from '@features/addresses/interfaces/via-cep.interface';
import { TextField } from '@shared/ui/text-field/text-field.component';
import { Button } from '@shared/ui/button/button.component';

@Component({
  imports: [FormRoot, TranslatePipe, TextField, Button],
  selector: 'app-address-search-form',
  styleUrl: './address-search-form.component.scss',
  templateUrl: './address-search-form.component.html',
})
export class AddressSearchForm {
  readonly initialCepSearch = signal<ViaCepSearch>({
    cep: '',
  });

  protected readonly inputId = 'address-search-zip-code';
  readonly searchForm = form(this.initialCepSearch);
}
