import { ReactNode } from 'react';
import { ArticleLayoutProvider } from '@/blocks/article-layout/Provider';
import allComponentLinks from '@/components/pages-sections/all-components/allComponentLinks';

const navSideLinks = [
  {
    name: 'Getting Started',
    href: '/components',
  },
  {
    name: 'Components',
    href: '/components/all',
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
