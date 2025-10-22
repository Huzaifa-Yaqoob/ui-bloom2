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
import PageLinks from '@/blocks/article-layout/sidebars/PageLinks';

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
        <DrawerHeader>
          <DrawerTitle className={'sr-only'}>Page Links Sidebar</DrawerTitle>
        </DrawerHeader>
        <PageLinks />
      </DrawerContent>
    </Drawer>
  );
}

export default LinkSideDrawer;
