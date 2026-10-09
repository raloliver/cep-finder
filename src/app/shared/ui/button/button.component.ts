import { booleanAttribute, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatButton, MatIconButton } from '@angular/material/button';
import { Icon } from '@shared/ui/icon/icon.component';

type ButtonVariant = 'filled' | 'icon';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  imports: [NgTemplateOutlet, MatButton, MatIconButton, RouterLink, Icon],
  selector: 'app-button',
  styleUrl: './button.component.scss',
  templateUrl: './button.component.html',
})
export class Button {
  readonly variant = input<ButtonVariant>('filled');
  readonly type = input<ButtonType>('button');
  readonly icon = input<string>();
  readonly link = input<string>();
  readonly ariaLabel = input<string>();
  readonly disabled = input(false, { transform: booleanAttribute });
}
