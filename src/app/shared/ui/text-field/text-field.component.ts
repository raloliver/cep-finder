import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatInput } from '@angular/material/input';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';

@Component({
  imports: [FormField, MatFormField, MatLabel, MatInput, MatHint, MatError],
  selector: 'app-text-field',
  styleUrl: './text-field.component.scss',
  templateUrl: './text-field.component.html',
})
export class TextField {
  readonly field = input.required<FieldTree<string>>();
  readonly inputId = input.required<string>();
  readonly label = input.required<string>();
  readonly placeholder = input('');
  readonly hint = input('');
}
