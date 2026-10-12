export interface DataTableSource {
  cep: string;
  address: string;
  date: string;
  actions: DataTableAction[];
}

export interface DataTableAction {
  icon: string;
  label: string;
}
