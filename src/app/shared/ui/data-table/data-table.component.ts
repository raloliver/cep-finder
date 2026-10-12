import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { DataTableAction } from '@shared/ui/data-table/data-table.interface';
import { Button } from '@shared/ui/button/button.component';
import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';

@Component({
  imports: [TranslatePipe, MatTableModule, Button, DatePipe],
  selector: 'app-data-table',
  styleUrl: './data-table.component.scss',
  templateUrl: './data-table.component.html',
})
export class DataTable {
  readonly addresses = input.required<ViaCepResponse[]>();
  private readonly translate = inject(TranslateService);

  readonly actions: DataTableAction[] = [
    {
      icon: 'close',
      label: this.translate.instant('addresses.list.remove'),
    },
  ];

  readonly displayedColumns: string[] = ['cep', 'address', 'date', 'actions'];
}
