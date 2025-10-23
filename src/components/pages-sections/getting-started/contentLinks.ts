import { Link } from '@/blocks/article-layout/Provider';

const contentLinks: Link[] = [
  {
    href: '#introduction-getting-started',
    name: 'Introduction',
  },
  {
    href: '#installation-getting-started',
    name: 'Installation',
    childLinks: [
      {
        href: '#installation-update-component-json',
        name: 'update component.json',
      },
      {
        href: '#installation-add-components',
        name: 'Add Components to Your Project',
      },
      {
        href: '#installation-using-components',
        name: 'Using Your First Component',
      },
    ],
  },
];

export default contentLinks;
