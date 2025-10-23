'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { AllLinks } from '@/components/sections/navbar/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BreakPoints, useWindowWidth } from '@/registry/hooks/useWindowWidth';
import { SquareMenu } from '@/icons';

function NavDrawer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    // Close the drawer if the screen size becomes larger than 'sm' while it's open
    if (open && windowWidth && windowWidth > BreakPoints.sm) {
      setOpen(false);
    }
  }, [windowWidth, open]);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="bottom">
      <DrawerTrigger className={'block sm:hidden'}>
        <SquareMenu width={32} height={32} className={'text-primary'} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={'sr-only'}>
          <DrawerTitle>Navbar Links</DrawerTitle>
        </DrawerHeader>
        <div className={'flex flex-col items-start gap-4 p-8'}>
          {AllLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full text-left text-lg font-bold hover:underline active:scale-95 ${
                pathname === link.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default NavDrawer;
