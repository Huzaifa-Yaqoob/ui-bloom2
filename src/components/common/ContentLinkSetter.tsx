'use client';

import { useEffect } from 'react';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { Link } from '@/blocks/article-layout/Provider';

function ContentLinkSetter({ links }: { links: Link[] }) {
  const { setContentLinks } = useArticleLayout();

  useEffect(() => {
    setContentLinks(links);
  }, [links]);

  return null;
}

export default ContentLinkSetter;
