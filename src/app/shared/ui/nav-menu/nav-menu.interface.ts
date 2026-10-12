export interface NavItem {
  labelKey: string;
  link: string;
  icon: string;
  children?: NavItem[];
}
