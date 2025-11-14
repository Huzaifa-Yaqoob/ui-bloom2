'use client';

import { ReactNode } from 'react';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JsxTsxCodeBlock from '@/blocks/code-blocks/varients/JsxTsxCode';

interface CodePreviewProps {
  children: ReactNode;
  code: { tsxCode: string; jsCode?: string };
}

function CodePreview({ children, code }: CodePreviewProps) {
  return (
    <Tabs defaultValue={'preview'} className={''}>
      <TabsList className={'w-full'}>
        <TabsTrigger value={'preview'}>Preview</TabsTrigger>
        <TabsTrigger value={'code'}>Code</TabsTrigger>
      </TabsList>
      <TabsContent value={'preview'}>
        <div
          className={
            'bg-muted flex min-h-64 items-center justify-center rounded-lg'
          }
        >
          {children}
        </div>
      </TabsContent>
      <TabsContent value={'code'}>
        <JsxTsxCodeBlock
          tsxcode={code.tsxCode}
          jsxcode={code?.jsCode || code.tsxCode}
          filename={'Example'}
        />
      </TabsContent>
    </Tabs>
  );
}

export default CodePreview;
