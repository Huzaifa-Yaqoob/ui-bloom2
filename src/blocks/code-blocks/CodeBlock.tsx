import type { BundledLanguage, BundledTheme } from 'shiki';
import Code from './Code';
import CopyToClipboard from './CopyToClipboard';
import { DefaultFile, JsonFile, ReactFile } from '@/icons';
import { JSX } from 'react';

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};

const FileIcon: Record<string, JSX.Element> = {
  jsx: <ReactFile />,
  json: <JsonFile />,
  tsx: <ReactFile />,
  default: <DefaultFile />,
};

function CodeBlock({ code, lang, theme, filename }: Props) {
  return (
    <div className={'rounded-lg p-4 md:p-8 lg:p-12'}>
      <div className={'rounded-lg bg-neutral-900'}>
        <div className={'flex items-center justify-between px-4 py-2'}>
          {filename && (
            <div
              className={
                'flex items-center gap-2 text-sm font-medium text-white'
              }
            >
              <span className={'ml-2 text-xs text-neutral-400'}>
                {FileIcon[lang || 'default']}
              </span>
              {filename}
            </div>
          )}
          <CopyToClipboard code={code} />
        </div>
        <Code code={code} lang={lang} theme={theme} />
      </div>
    </div>
  );
}

export default CodeBlock;
