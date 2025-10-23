'use client';

import Page from '@/components/common/Page';
import Introduction from '@/components/pages-sections/getting-started/Introduction';
import Installation from '@/components/pages-sections/getting-started/Installation';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { useEffect } from 'react';
import DocFooter from '@/components/sections/doc-footer/DocFooter';

function Components() {
  const { setSideNavLinks } = useArticleLayout();

  useEffect(() => {
    setSideNavLinks(() => [
      {
        name: 'Getting Started',
        href: '/components',
      },
      {
        name: 'Components',
        href: '/components/all',
      },
    ]);
  }, []);

  return (
    <Page>
      <Introduction />
      <Installation />
      <DocFooter
        nextLink={{
          name: 'Components',
          href: '/components/all',
        }}
        prevLink={null}
      />
    </Page>
  );
}

export default Components;
