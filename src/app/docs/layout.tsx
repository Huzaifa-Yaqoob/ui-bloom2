import { ReactNode } from 'react';
import { ArticleLayoutProvider } from '@/blocks/article-layout/Provider';
import { navSideLinks } from '@/lib/docs-navigation';

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
