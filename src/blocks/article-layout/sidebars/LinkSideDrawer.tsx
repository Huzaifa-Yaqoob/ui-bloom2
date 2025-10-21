'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { LinkMenu } from '@/icons/inedx';
import { useEffect, useState } from 'react';
import { BreakPoints, useWindowWidth } from '@/registery/hooks/useWindowWidth';

function LinkSideDrawer() {
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    // Close the drawer if it's open and the screen becomes 'sm' or larger
    if (open && windowWidth && windowWidth >= BreakPoints.sm) {
      setOpen(false);
    }
  }, [windowWidth, open]);

  return (
    <Drawer direction={'left'} open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <LinkMenu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={'p-4'}>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        {/* You can map over your navigation links here */}
      </DrawerContent>
    </Drawer>
  );
}

export default LinkSideDrawer;
