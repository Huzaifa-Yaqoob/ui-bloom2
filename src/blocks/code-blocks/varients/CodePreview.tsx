import { ReactNode } from 'react';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JsxTsxCodeBlock from '@/blocks/code-blocks/varients/JsxTsxCode';

interface CodePreviewProps {
  children: ReactNode;
  code: { tsxCode: string; jsxCode?: string };
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
            'bg-muted flex max-h-[500px] min-h-64 items-center justify-center overflow-y-auto rounded-lg p-4'
          }
        >
          {children}
        </div>
      </TabsContent>
      <TabsContent value={'code'}>
        <JsxTsxCodeBlock
          tsxcode={code.tsxCode}
          jsxcode={code?.jsxCode || code.tsxCode}
          filename={'Example'}
        />
      </TabsContent>
    </Tabs>
  );
}

export default CodePreview;
