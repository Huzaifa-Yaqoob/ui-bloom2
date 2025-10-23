'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CopyToClipboard from '../CopyToClipboard';
import Code from '../Code';
import { useState } from 'react';

interface BashTabProps {
  value: string;
  prefix?: string | null;
}

function BashTab({ value, prefix = 'ui-bloom/' }: BashTabProps) {
  const [tabValue, setTabValue] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>(
    'npm'
  );
  const finalPrefix = prefix === null ? '' : prefix;
  const commandValue = `${finalPrefix}${value}`;

  const commands = {
    npm: `npx shadcn@latest add ${commandValue}`,
    pnpm: `pnpm dlx shadcn@latest add ${commandValue}`,
    yarn: `yarn dlx shadcn@latest add ${commandValue}`,
    bun: `bunx shadcn@latest add ${commandValue}`,
  };

  return (
    <div className={'p-4 md:p-8 lg:p-12'}>
      <Tabs
        defaultValue={tabValue}
        onValueChange={(value) => {
          if (
            value !== 'npm' &&
            value !== 'pnpm' &&
            value !== 'yarn' &&
            value !== 'bun'
          ) {
            return;
          }
          setTabValue(value);
        }}
        className="not-prose bg-code-background gap-0 rounded-lg"
      >
        <TabsList
          className={'flex w-full items-center justify-between bg-transparent'}
        >
          <div className={'flex items-center'}>
            <TabsTrigger
              value="npm"
              className={
                'text-code-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground'
              }
            >
              npm
            </TabsTrigger>
            <TabsTrigger
              value="pnpm"
              className={
                'text-code-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground'
              }
            >
              pnpm
            </TabsTrigger>
            <TabsTrigger
              value="yarn"
              className={
                'text-code-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground'
              }
            >
              yarn
            </TabsTrigger>
            <TabsTrigger
              value="bun"
              className={
                'text-code-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground'
              }
            >
              bun
            </TabsTrigger>
          </div>
          <div className={''}>
            <CopyToClipboard code={commands[tabValue]} />
          </div>
        </TabsList>
        <TabsContent value="npm">
          <Code code={commands.npm} lang={'bash'} />
        </TabsContent>
        <TabsContent value="pnpm">
          <Code code={commands.pnpm} lang={'bash'} />
        </TabsContent>
        <TabsContent value="yarn">
          <Code code={commands.yarn} lang={'bash'} />
        </TabsContent>
        <TabsContent value="bun">
          <Code code={commands.bun} lang={'bash'} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BashTab;
