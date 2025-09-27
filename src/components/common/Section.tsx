import { ComponentProps, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

function Section({
  className,
  asChild,
  ...props
}: ComponentProps<'section'> & {
  className?: string;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      className={cn('px-2 py-2 md:px-8 md:py-4 lg:px-16', className)}
      {...props}
    />
  );
}

export default Section;
