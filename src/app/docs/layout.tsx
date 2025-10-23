import { ReactNode } from 'react';
import { ArticleLayoutProvider } from '@/blocks/article-layout/Provider';
import allComponentLinks from '@/components/pages-sections/all-components/allComponentLinks';

const navSideLinks = [
  {
    name: 'Getting Started',
    href: '/docs',
  },
  {
    name: 'Components',
    href: '/docs/components',
    childLinks: allComponentLinks,
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ArticleLayoutProvider navSideLinks={navSideLinks}>
      {children}
    </ArticleLayoutProvider>
  );
}
