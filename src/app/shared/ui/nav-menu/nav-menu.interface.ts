export interface NavItem {
  readonly labelKey: string;
  readonly link: string;
  readonly icon: string;
  readonly children?: readonly NavItem[];
}
