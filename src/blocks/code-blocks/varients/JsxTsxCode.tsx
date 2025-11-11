'use client';

import { useState } from 'react';
import type { BundledTheme } from 'shiki';
import Code from '../Code';
import CopyToClipboard from '../CopyToClipboard';
import { ReactFile } from '@/icons';
import { JSX } from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  jsxcode: string;
  tsxcode: string;
  theme?: BundledTheme;
  filename?: string;
};

function JsxTsxCodeBlock({ jsxcode, tsxcode, theme, filename }: Props) {
  const [isTsx, setIsTsx] = useState(true);

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
                <ReactFile />
              </span>
              {filename}
            </div>
          )}
          <div className={'flex items-center gap-2'}>
            <CopyToClipboard code={isTsx ? tsxcode : jsxcode} />
            <Button
              onClick={() => setIsTsx((prev) => !prev)}
              variant={'ghost'}
              size={'icon'}
              className={'text-background size-8'}
            >
              {isTsx ? 'TSX' : 'JSX'}
            </Button>
          </div>
        </div>
        <Code
          code={isTsx ? tsxcode : jsxcode}
          lang={isTsx ? 'tsx' : 'jsx'}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default JsxTsxCodeBlock;
