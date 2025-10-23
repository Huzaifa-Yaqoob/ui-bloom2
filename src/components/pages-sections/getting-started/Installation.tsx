'use client';

import { Code, H2, H4, P } from '@/registery/components/typography/typography';
import Section from '@/components/common/Section';
import { useEffect } from 'react';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CodeBlock from '@/blocks/code-blocks/CodeBlock';

const code = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@ui-bloom": "https://v0.dev/chat/b/{name}" // [!code ++]
  }
}`;

function Installation() {
  const { setContentLinks } = useArticleLayout();

  useEffect(() => {
    setContentLinks((prev) => [
      ...prev,
      {
        name: 'Installation',
        href: '#installation-getting-started',
        childLinks: [
          {
            name: 'Update component.json',
            href: '#installation-update-component-json',
          },
        ],
      },
    ]);
  }, []);

  return (
    <Section id={'installation-getting-started'}>
      <H2>Installation</H2>
      <div>
        <P>
          Before using this registry, ensure that <strong>shadcn/ui</strong> is
          properly set up in your project. If you haven’t installed it yet, you
          can follow the official guide here:{' '}
          <a
            href="https://ui.shadcn.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'text-foreground m-0 p-0 text-base'
            )}
          >
            Setup shadcn/ui
          </a>
          .
        </P>
      </div>
      <div id={'installation-update-component-json'} className={'space-y-0'}>
        <span className={'space-x-2'}>
          <H4 className={'inline-block'}>Update </H4>
          <Code className={'inline-block'} asChild={true}>
            <H4>component.json</H4>
          </Code>
        </span>
        <P className={'pt-0'}>
          Update your <Code>component.json</Code> with the code that is provided
          under this so you can easily add the components to your project.
        </P>
        <CodeBlock code={code} lang={'json'} filename={'component.json'} />
      </div>
    </Section>
  );
}

export default Installation;
