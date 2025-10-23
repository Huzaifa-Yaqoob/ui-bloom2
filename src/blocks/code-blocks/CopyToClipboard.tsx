'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Tick } from '@/icons';

export default function CopyToClipboard({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    } catch (error) {
      console.error('Error copying to clipboard', error);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <Button
      onClick={copyToClipboard}
      variant="ghost"
      size="icon"
      className="text-secondary size-6"
    >
      {isCopied ? <Tick /> : <Copy />}
    </Button>
  );
}
