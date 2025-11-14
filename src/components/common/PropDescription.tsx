import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoIcon } from '@/icons';
import { ReactNode } from 'react';

function PropDescription({ description }: { description?: ReactNode }) {
  if (!description) return null;

  return (
    <Tooltip>
      <TooltipTrigger className="hover:bg-accent ml-1 inline-block rounded align-middle">
        <InfoIcon width={18} height={18} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default PropDescription;
