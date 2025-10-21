import { ReactNode } from 'react';
import { ArticleLayoutProvider } from '@/blocks/article-layout/Provider';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ArticleLayoutProvider>{children}</ArticleLayoutProvider>;
}
