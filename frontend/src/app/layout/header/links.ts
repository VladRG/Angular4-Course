export const appLinks: Array<AppRouterLink> = [
  {
    label: 'Contact',
    path: ['contact'],
    activeClass: 'link-active',
    options: {
      exact: true
    }
  },
  {
    label: 'About',
    path: ['about'],
    activeClass: 'link-active',
    options: {
      exact: true
    }
  },
  {
    label: 'Users',
    path: ['user'],
    activeClass: 'link-active',
    options: {
      exact: true
    }
  }
];

export class AppRouterLink {
  label: string;
  path: Array<string>;
  activeClass: string;
  options: {
    exact: true
  };
}

export const footerLinks: Array<any> = [];
