import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatIcon],
  selector: 'app-icon',
  styleUrl: './icon.component.scss',
  templateUrl: './icon.component.html',
})
export class Icon {
  readonly name = input.required<string>();
}
