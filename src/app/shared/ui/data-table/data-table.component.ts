import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { DataTableSource } from './data-table.interface';
import { Button } from '@shared/ui/button/button.component';

@Component({
  imports: [TranslatePipe, MatTableModule, Button, DatePipe],
  selector: 'app-data-table',
  styleUrl: './data-table.component.scss',
  templateUrl: './data-table.component.html',
})
export class DataTable {
  private readonly translate = inject(TranslateService);
  private readonly ELEMENT_DATA: DataTableSource[] = [
    {
      cep: '04090-000',
      date: '2026-10-12T13:03:49.436Z',
      address: 'Alameda dos Nhambiquaras, até 0580 - lado par',
      actions: [
        {
          icon: 'close',
          label: this.translate.instant('addresses.list.remove'),
        },
      ],
    },
    {
      cep: '04090-000',
      date: '2026-10-12T13:03:49.436Z',
      address: 'Alameda dos Nhambiquaras, até 0580 - lado par',
      actions: [
        {
          icon: 'close',
          label: this.translate.instant('addresses.list.remove'),
        },
      ],
    },
    {
      cep: '04090-000',
      date: '2026-10-12T13:03:49.436Z',
      address: 'Alameda dos Nhambiquaras, até 0580 - lado par',
      actions: [
        {
          icon: 'close',
          label: this.translate.instant('addresses.list.remove'),
        },
      ],
    },
  ];

  readonly displayedColumns: string[] = ['cep', 'address', 'date', 'actions'];
  readonly dataSource = [...this.ELEMENT_DATA];
}
