import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';

export interface DataTableAction {
  id: DataTableActionId;
  icon: string;
  label: string;
}

export interface DataTableActionEvent {
  readonly actionId: DataTableActionId;
  readonly row: ViaCepResponse;
}

export enum DataTableActionId {
  REMOVE = 'remove',
}
