'use client';

import { Code, H2, H4, P } from '@/registery/components/typography/typography';
import Section from '@/components/common/Section';
import { useEffect } from 'react';
import { useArticleLayout } from '@/blocks/article-layout/useArticleLayout';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CodeBlock from '@/blocks/code-blocks/CodeBlock';
import BashTab from '@/blocks/code-blocks/varients/BashTab';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from '@/icons';

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
    "@ui-bloom": "${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/r/{name}.json" // [!code ++]
  }
}`;

const exampleCode = `import { FieldRenderer } from "@/components/ui/field-renderer"

export default function Example() {
  return (
    <div className="max-w-sm p-4">
      <FieldRenderer label="Username" placeholder="Enter your username" />
    </div>
  )
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
          {
            name: 'Add components',
            href: '#installation-add-components',
          },
          {
            name: 'Using a component',
            href: '#installation-using-components',
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
      <div id="installation-update-component-json" className={'mt-4'}>
        <span className="space-x-2">
          <H4 className="inline-block">Update</H4>
          <Code className="inline-block" asChild={true}>
            <H4>component.json</H4>
          </Code>
        </span>
        <P className="pt-0">
          Update your <Code>component.json</Code> file using the configuration
          shown below. This will allow you to seamlessly add and manage
          components from the registry in your project.
          <br />
          If you already have an existing <Code>component.json</Code> file,
          simply merge or add the <strong>highlighted lines</strong> instead of
          replacing the entire file.
        </P>
        <CodeBlock code={code} lang="json" filename="component.json" />
      </div>
      <div id="installation-add-components" className={'mt-4'}>
        <H4>Add Components to Your Project</H4>

        <P>
          Once you’ve updated your <Code>component.json</Code>, adding any
          component from the registry becomes effortless. You can simply run the
          following command:
        </P>

        <BashTab value={'field-renderer'} />

        <P>
          That’s it — the component will be added automatically using your
          updated configuration.
        </P>

        <Separator className="my-6" />

        <P>
          However, if you haven’t updated <Code>component.json</Code>, you can
          still add components manually. The command will just be a bit longer,
          as shown below:
        </P>

        <BashTab
          value={`${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/r/field-renderer.json`}
          prefix={null}
        />

        <P>
          Both methods work perfectly, but updating <Code>component.json</Code>{' '}
          keeps your workflow cleaner and your commands shorter — especially
          when adding multiple components.
        </P>

        <P>
          Throughout this documentation, we’ll be using the{' '}
          <strong>first method</strong> (based on your updated{' '}
          <Code>component.json</Code>) as the default approach. It’s the
          recommended setup for maintaining consistency, ensuring smooth
          updates, and keeping your project organized as it grows.
        </P>

        <P>
          By following this approach, you’ll be aligned with the best practices
          used across our registry — making future installations and
          integrations simpler and more predictable.
        </P>
      </div>
      <div id="installation-using-components" className={'mt-4'}>
        <H4>Using Your First Component</H4>

        <P>
          Once a component is added, it will appear in your{' '}
          <Code>components/ui</Code> directory (or your configured components
          path). You can import and start using it right away in your
          application.
        </P>

        <CodeBlock
          code={exampleCode}
          lang="tsx"
          filename="app/example/page.tsx"
        />

        <P>
          That’s it! You’ve successfully installed and rendered your first
          component from the registry. You can now explore more components,
          utilities, and hooks to build faster and with greater consistency.
        </P>

        <Alert variant={'default'} className={'my-4'}>
          <AlertTitle className={'flex items-center gap-1 text-sm font-medium'}>
            <Info />
            Note:
          </AlertTitle>
          <AlertDescription>
            You can customize the component after adding it — every component is
            fully open-source and editable.
          </AlertDescription>
        </Alert>
      </div>
    </Section>
  );
}

export default Installation;
