export interface LinkItem {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  iconColor: string;
}

export interface LinkSection {
  label: string;
  links: LinkItem[];
}