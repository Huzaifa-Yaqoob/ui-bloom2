'use client';

import { useState } from 'react';
import type { BundledTheme } from 'shiki';
import Code from '../Code';
import CopyToClipboard from '../CopyToClipboard';
import { JsFile, TsFile } from '@/icons';
import { JSX } from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  jscode: string;
  tscode: string;
  theme?: BundledTheme;
  filename?: string;
};

const FileIcon: Record<string, JSX.Element> = {
  js: <JsFile className={'h-4 w-4'} />,
  ts: <TsFile className={'h-4 w-4'} />,
};

function JsTsCodeBlock({ jscode, tscode, theme, filename }: Props) {
  const [isTs, setIsTs] = useState(true);

  return (
    <div className={'p-4 md:p-8 lg:p-12'}>
      <div className={'bg-code-background rounded-lg'}>
        <div className={'flex items-center justify-between px-4 py-2'}>
          {filename && (
            <div
              className={
                'flex items-center gap-2 text-sm font-medium text-white'
              }
            >
              <span className={'text-code-foreground ml-2 text-xs'}>
                {FileIcon[isTs ? 'ts' : 'js']}
              </span>
              {filename}
            </div>
          )}
          <div className={'flex items-center gap-2'}>
            <CopyToClipboard code={isTs ? tscode : jscode} />
            <Button
              onClick={() => setIsTs((prev) => !prev)}
              variant={'ghost'}
              size={'icon'}
              className={'text-background size-8'}
            >
              {isTs ? 'TS' : 'JS'}
            </Button>
          </div>
        </div>
        <Code
          code={isTs ? tscode : jscode}
          lang={isTs ? 'ts' : 'js'}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default JsTsCodeBlock;
