import { Component, input } from '@angular/core';
import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';
import { DataTable } from '@shared/ui/data-table/data-table.component';

@Component({
  imports: [DataTable],
  selector: 'app-address-list',
  styleUrl: './address-list.component.scss',
  templateUrl: './address-list.component.html',
})
export class AddressList {
  readonly addresses = input.required<ViaCepResponse[]>();
}
