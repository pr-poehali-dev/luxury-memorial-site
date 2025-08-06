export interface MenuItem {
  title: string;
  href: string;
  isPopular?: boolean;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  expandable?: boolean;
}

export interface MainSection {
  id: string;
  title: string;
  href: string;
  categories: MenuSection[];
  previewImage?: string;
}