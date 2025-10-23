import { ReactNode } from 'react';
import { ArticleLayoutProvider } from '@/blocks/article-layout/Provider';

const navSideLinks = [
  {
    name: 'Getting Started',
    href: '/components',
  },
  {
    name: 'Components',
    href: '/components/all',
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
