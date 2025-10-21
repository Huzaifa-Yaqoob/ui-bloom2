import { useContext } from 'react';
import { ArticleLayoutContext } from '@/blocks/article-layout/Provider';

export function useArticleLayout() {
  const context = useContext(ArticleLayoutContext);
  if (!context) {
    throw new Error(
      'useArticleLayout must be used within a ArticleLayoutProvider'
    );
  }
  return context;
}
