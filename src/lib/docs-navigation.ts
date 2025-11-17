import allComponentLinks from '@/components/pages-sections/all-components/allComponentLinks';
import allHooksLinks from '@/components/pages-sections/all-hooks/allHooksLinks';

export interface NavLink {
  name: string;
  href: string;
  childLinks?: NavLink[];
}

export const navSideLinks: NavLink[] = [
  {
    name: 'Getting Started',
    href: '/docs',
  },
  {
    name: 'Components',
    href: '/docs/components',
    childLinks: allComponentLinks,
  },
  {
    name: 'Hooks',
    href: '/docs/hooks',
    childLinks: allHooksLinks,
  },
];

function flattenNavLinks(links: NavLink[]): NavLink[] {
  return links.flatMap((link) => {
    const parent = { href: link.href, name: link.name };
    if (link.childLinks) {
      return [parent, ...flattenNavLinks(link.childLinks)];
    }
    return parent;
  });
}

export const flattenedNavLinks = flattenNavLinks(navSideLinks);
