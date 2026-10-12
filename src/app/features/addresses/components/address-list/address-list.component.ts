import { Component, input, output } from '@angular/core';
import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';
import { DataTable } from '@shared/ui/data-table/data-table.component';
import {
  DataTableActionEvent,
  DataTableActionId,
} from '@shared/ui/data-table/data-table.interface';

@Component({
  imports: [DataTable],
  selector: 'app-address-list',
  styleUrl: './address-list.component.scss',
  templateUrl: './address-list.component.html',
})
export class AddressList {
  readonly addresses = input.required<ViaCepResponse[]>();
  readonly removeAddress = output<ViaCepResponse>();

  protected handleRemoveAddress(event: DataTableActionEvent): void {
    const { actionId, row } = event;

    if (actionId === DataTableActionId.REMOVE) {
      this.removeAddress.emit(row);
    }
  }
}
