'use client';

import { Button } from '@/components/ui/button';
import { ReactNode, useState } from 'react';

function InstallationTab({
  cliChildren,
  manualChildren,
}: {
  cliChildren: ReactNode;
  manualChildren: ReactNode;
}) {
  const [isCli, setIsCli] = useState(true);
  return (
    <div className={''}>
      <div className={'flex gap-4 border-b'}>
        <Button
          onClick={() => setIsCli(true)}
          variant={'link'}
          className={`p-0 hover:no-underline focus:no-underline ${isCli ? 'text-primary border-primary rounded-none border-b-2 font-bold' : 'text-foreground'}`}
        >
          CLI
        </Button>
        <Button
          onClick={() => setIsCli(false)}
          variant={'link'}
          className={`p-0 hover:no-underline focus:no-underline ${isCli ? 'text-foreground' : 'text-primary border-primary rounded-none border-b-2 font-bold'}`}
        >
          Manual
        </Button>
      </div>
      <div className={'py-4'}>{isCli ? cliChildren : manualChildren}</div>
    </div>
  );
}

export default InstallationTab;
