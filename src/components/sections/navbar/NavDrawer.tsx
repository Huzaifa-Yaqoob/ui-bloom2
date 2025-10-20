'use client';

import NavLinks from '@/components/sections/navbar/NavLinks';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { AllLinks } from '@/components/sections/navbar/links';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

function NavDrawer() {
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className={'flex flex-col gap-4'}>
          {AllLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={buttonVariants({
                variant: 'link',
                className:
                  pathname === link.href ? 'text-primary' : 'text-foreground',
              })}
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
