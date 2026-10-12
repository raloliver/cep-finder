import { Component } from '@angular/core';
import { DataTable } from '@shared/ui/data-table/data-table.component';

@Component({
  imports: [DataTable],
  selector: 'app-address-list',
  styleUrl: './address-list.component.scss',
  templateUrl: './address-list.component.html',
})
export class AddressList {}
