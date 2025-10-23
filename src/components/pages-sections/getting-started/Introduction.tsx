'use client';

import { H2, P } from '@/registery/components/typography/typography';
import Section from '@/components/common/Section';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { useEffect } from 'react';

function Introduction() {
  const { setContentLinks } = useArticleLayout();

  useEffect(() => {
    const link = {
      href: '#introduction-getting-started',
      name: 'Introduction',
    };
    setContentLinks((prev) => [...prev, link]);

    // Cleanup function to remove the link when the component unmounts
    return () => {
      setContentLinks((prev) => prev.filter((l) => l.href !== link.href));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setContentLinks]);

  return (
    <Section id="introduction-getting-started">
      <H2>Introduction</H2>
      <div>
        <P>
          Welcome to our <strong>shadcn/ui Registry</strong> — an enhanced and
          extended collection built around the popular{' '}
          <strong>shadcn/ui</strong> library. It includes everything you know
          from the original library, along with{' '}
          <i>
            additional, refined, and ready-to-use components, charts, hooks, and
            utilities
          </i>{' '}
          to help you build interfaces faster and with greater flexibility.
        </P>
        <P>
          The setup process is exactly the same as the official{' '}
          <strong>shadcn/ui</strong> installation, so if you’ve used it before,
          you’ll feel right at home. Think of this registry as your{' '}
          <b>expanded design system toolkit</b> — combining the best of
          shadcn/ui with a wider range of resources to speed up your workflow
          and boost creativity.
        </P>
      </div>
    </Section>
  );
}

export default Introduction;
