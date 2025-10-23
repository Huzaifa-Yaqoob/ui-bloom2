'use client';

import Page from '@/components/common/Page';
import Introduction from '@/components/pages-sections/getting-started/Introduction';
import Installation from '@/components/pages-sections/getting-started/Installation';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { useEffect } from 'react';

function Components() {
  const { setSideNavLinks } = useArticleLayout();

  useEffect(() => {
    setSideNavLinks((prev) => [
      {
        name: 'Getting Started',
        href: '/components',
      },
    ]);
  }, []);

  return (
    <Page>
      <Introduction />
      <Installation />
    </Page>
  );
}

export default Components;
