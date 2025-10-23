'use client';

import { codeToHtml } from 'shiki';
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers';
import type { BundledLanguage, BundledTheme } from 'shiki';
import { useEffect, useState } from 'react';

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
};
export default function Code({
  code,
  lang = 'javascript',
  theme = 'nord',
}: Props) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const html = await codeToHtml(code, {
        lang,
        theme,
        transformers: [
          transformerNotationHighlight(),
          transformerNotationDiff(),
        ],
      });
      setHtml(html);
    })();
  }, [lang, code]);

  if (!html) return null;

  return (
    <div
      className="border-border max-h-[600px] overflow-y-auto border-t-2 text-sm [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&>pre]:overflow-x-auto [&>pre]:!bg-transparent [&>pre]:py-3 [&>pre]:pr-5 [&>pre]:pl-4 [&>pre]:leading-snug"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
