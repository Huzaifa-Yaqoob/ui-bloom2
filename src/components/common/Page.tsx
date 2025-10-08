import { ComponentProps, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

function Page({
  className,
  asChild,
  ...props
}: ComponentProps<'div'> & {
  className?: string;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'div';

  return <Comp className={cn('flex-grow', className)} {...props} />;
}

export default Page;
